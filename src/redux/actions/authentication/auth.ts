import { AxiosResponse } from 'axios';
import { API_URL } from '../../../constants/api-url/apiUrl.constants';
import {
  AuthUserDataProps,
  LoginResponse,
  ResetPasswordProp,
} from '../../../intefaces/pages/authentication/signup/signup.interfaces';
import { ChangePasswordProp } from '../../../intefaces/pages/authentication/user/user.interfaces';
import { executeApi } from '../../../utils/axios/general';
import { decryptData } from '../../../utils/common/crypto-utils';

//TO REGISTER USER
export const registerUser = async (data: { data: string }) => {
  const response: string = await executeApi(
    'post',
    API_URL.AUTH_USER.SIGNUP,
    data,
  );
  const decryptResponse: AxiosResponse = decryptData(response);
  return decryptResponse.data;
};

// TO LOGIN USER
export const loginUser = async (credentials: {
  data: string;
}): Promise<LoginResponse> => {
  const response: string = await executeApi(
    'post',
    API_URL.AUTH_USER.LOGIN,
    credentials,
  );
  const decryptResponse: AxiosResponse = decryptData(response);
  return decryptResponse.data;
};

// TO LOGOUT USER
export const logoutUser = async (): Promise<
  AxiosResponse<AuthUserDataProps>
> => {
  const response: AxiosResponse = await executeApi(
    'post',
    API_URL.AUTH_USER.LOGOUT,
  );
  return response;
};

//Forgot password
export const forgotUser = async (data: { emailId?: string }) => {
  const response: AxiosResponse = await executeApi(
    'put',
    API_URL.AUTH_USER.FORGOTPASSWORD,
    data,
  );
  if (response?.data?._id) {
    return response.data as AuthUserDataProps;
  }
  throw new Error('Failed to send link');
};

//Reset password
export const resetpassword = async (data: ResetPasswordProp) => {
  const response: AxiosResponse = await executeApi(
    'put',
    API_URL.AUTH_USER.RESETPASSWORD,
    data,
  );
  if (response?.data?._id) {
    return response.data as AuthUserDataProps;
  }
  throw new Error('Failed to send link');
};

//Set Password user
export const setpassword = async (data: ResetPasswordProp) => {
  const response: AxiosResponse = await executeApi(
    'put',
    API_URL.AUTH_USER.SETPASSWORD,
    data,
  );
  if (response?.data?._id) {
    return response.data as AuthUserDataProps;
  }
  throw new Error('Failed to send link');
};

//Set Password user
export const changepassword = async (data: ChangePasswordProp) => {
  const response: AxiosResponse = await executeApi(
    'put',
    API_URL.AUTH_USER.CHANGEPASSWORD,
    data,
  );
  if (response?.data?._id) {
    return response.data as AuthUserDataProps;
  }
  throw new Error('Failed to send link');
};

//FETCH EXSTING USERS
export const fetchExstingUsers = async () => {
  const response: AxiosResponse = await executeApi(
    'get',
    API_URL.AUTH_USER.SIGNUP,
  );
  return response.data;
};

export const fetchSingleUser = async (
  data: string,
): Promise<AuthUserDataProps> => {
  const response: AxiosResponse = await executeApi(
    'put',
    `${API_URL.AUTH_USER.SINGLE_USER}/${data}`,
  );
  return response.data; // Access the data property to get the actual data
};

//TO UPDATE USER PROFILE DATA
export const updateUserProfileDetail = async (
  data: AuthUserDataProps,
): Promise<AuthUserDataProps> => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    formData.append(key, data[key as keyof AuthUserDataProps] as string);
  });
  const response: AxiosResponse = await executeApi(
    'put',
    `${API_URL.AUTH_USER.UPDATE}/${data._id}`,
    formData,
  );
  return response.data || {};
};

export const verifyKey = async (key: string) => {
  const response: AxiosResponse = await executeApi(
    'get',
    `${API_URL.AUTH_USER.VERIFYKEY}/${key}`,
  );
  return response;
};
