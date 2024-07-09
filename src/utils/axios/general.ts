import axios, { AxiosResponse } from 'axios';
import { ShowNotification } from '../notification';
import { getLocalStorageItem } from '../local-storage';
import { getIpAddressData } from '../get-ip-address/index';

type HttpMethod = 'get' | 'post' | 'put' | 'delete';

interface ApiError extends Error {
  response?: AxiosResponse;
}

export const executeApi = async <T>(
  method: HttpMethod,
  url: string,
  data?: object,
  token?: boolean,
): Promise<T> => {
  try {
    const userActivity = await getIpAddressData();
    let config = {};
    if (!token) {
      config = {
        headers: {
          Authorization: `Bearer ${getLocalStorageItem('token')}`,
          ipAddress: userActivity?.ip,
          location: userActivity?.location,
        },
      };
    }
    const requestConfig = {
      method: method,
      url: url,
      data: data,
      ...config,
    };
    const response: AxiosResponse<T> = await axios(requestConfig);
    return response.data;
  } catch (error) {
    const err: ApiError = error as ApiError;
    if (err.response?.data?.message) {
      ShowNotification({
        message:
          err.response?.data?.message || err.response?.data?.error.message,
        type: 'error',
      });
    }
    return Promise.reject(err.response);
  }
};
