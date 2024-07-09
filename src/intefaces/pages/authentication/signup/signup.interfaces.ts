export interface AuthUserDataProps {
  _id?: React.Key;
  firstName?: string | '';
  lastName?: string | '';
  emailId?: string;
  password?: string | '';
  contact?: number;
  createdAt?: string;
  age?: number;
  address?: string | '';
  profileImage?: string | '';
  data?: object;
  dob?: string | '';
  confirmPassword?: string | '';
}

export interface LoginResponse {
  token?: string;
  _id?: string;
}

export interface ResetPasswordProp {
  password?: string;
  keys?: string;
}
