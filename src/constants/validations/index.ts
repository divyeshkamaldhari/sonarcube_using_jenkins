import { Rule } from 'antd/lib/form';
import dayjs from 'dayjs';

//create a custom validation using antd
export const Validation = (
  action:
    | 'phoneNumber'
    | 'required'
    | 'email'
    | 'password'
    | 'dob'
    | 'confirmPassword',
  data?: string,
): Rule[] => {
  switch (action) {
    case 'phoneNumber':
      return [
        { required: true, message: 'Please enter your phone number' },
        { len: 10, message: 'Phone number must be 10 digits' },
      ];
    case 'required':
      return [{ required: true, message: `Please input your ${data}!` }];
    case 'email':
      return [
        { required: true, message: 'Please input your email!' },
        { type: 'email', message: 'Please enter a valid email!' },
      ];
    case 'password':
      return [
        { required: true, message: 'Please enter your password.' },
        { min: 4, message: 'Password must be at least 4 characters.' },
        { max: 20, message: 'Password must be at most 20 characters.' },
        {
          pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{4,20}$/,
          message:
            'Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 special character.',
        },
      ];
    case 'confirmPassword':
      return [
        { required: true, message: 'Please confirm your password.' },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue('password') === value) {
              return Promise.resolve();
            }
            return Promise.reject(
              new Error('The confirmed password does not match the password.'),
            );
          },
        }),
      ];
    case 'dob':
      return [
        {
          required: true,
          message: 'Please select your date of birth.',
        },
        {
          validator(_, value) {
            if (!value) return Promise.resolve();
            const age = dayjs().diff(value, 'year');
            if (age >= 16) {
              return Promise.resolve();
            }
            return Promise.reject(
              new Error('You must be at least 16 years old to sign up.'),
            );
          },
        },
      ];
    default:
      return [];
  }
};
