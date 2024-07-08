import axios from 'axios';
import { ShowNotification } from '../notification';

export const executeApi = async(
  method,
  url,
  data,
) => {
  try {
    let config = {};
    // if (!token) {
    //   config = {
    //     headers: { Authorization: `Bearer token` },
    //   };
    // }
    const requestConfig = {
      method: method,
      url: url,
      data: data,
      ...config,
    };
    const response = await axios(requestConfig);
    return response.data;
  } catch (error) {
    const err = error;
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
