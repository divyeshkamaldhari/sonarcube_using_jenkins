const BASE_URL = import.meta.env.VITE_REACT_APP_MOCK_API_URL;
// const API_V = "v1"; use api version if needed
const UserModule = 'user';
export const API_URL = {
  AUTH_USER: {
    SIGNUP: `${BASE_URL}/${UserModule}/signup`,
    LOGIN: `${BASE_URL}/${UserModule}/login`,
    LIST: `${BASE_URL}/${UserModule}/list`,
    UPDATE: `${BASE_URL}/${UserModule}/update`,
    SINGLE_USER: `${BASE_URL}/${UserModule}/get-user-by-id`,
    LOGOUT: `${BASE_URL}/${UserModule}/logout`,
    FORGOTPASSWORD: `${BASE_URL}/${UserModule}/forget-password`,
    RESETPASSWORD: `${BASE_URL}/${UserModule}/reset-password`,
    SETPASSWORD: `${BASE_URL}/${UserModule}/set-password`,
    CHANGEPASSWORD: `${BASE_URL}/${UserModule}/change-password`,
    VERIFYKEY: `${BASE_URL}/${UserModule}/key-verify`,
  },
  CUSTOMERS: {
    GET_ALL: `${BASE_URL}/customers-list`,
  },
  BLOG: {
    GET_BLOG_LIST: `${BASE_URL}/blog/user-list`,
    GET_BLOG_CATERGORY_LIST: `${BASE_URL}/blog`,
  },
};
