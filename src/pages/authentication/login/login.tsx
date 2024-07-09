import { Button, Checkbox, Form, Input } from 'antd';
import { Validation } from '../../../constants/validations';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { routeConstant } from '../../../constants/routes';
import { GoogleIcon } from '../../../assets/svg-images';
import React from 'react';
// import {
//   CredentialResponse,
//   GoogleLogin,
//   GoogleOAuthProvider,
//   googleLogout,
// } from '@react-oauth/google';
interface LoginComponentProps {
  heading: string;
  onFinish: (values: { email: string; password: string }) => void;
  remember: boolean;
  loginBtnText: string;
  createNewAccText: string;
  emailLable: string;
  passwordLable: string;
  isGoogleAuthentication?: boolean;
  LoginPageIcon?: React.ElementType;
  description?: string;
}

export const LoginComponent = ({
  onFinish,
  heading,
  remember,
  loginBtnText,
  createNewAccText,
  emailLable,
  passwordLable,
  isGoogleAuthentication,
  LoginPageIcon,
  description,
}: LoginComponentProps) => {
  const { t } = useTranslation();
  // const handleLoginSuccess = (response: CredentialResponse) => {
  //   console.log('Login Success:', response);
  // };
  return (
    <div className="main-login-form">
      <div className="login-heading">
        {LoginPageIcon && <LoginPageIcon />}
        <h3>{heading}</h3>
        {description && <p>{description}</p>}
      </div>
      <div className="login-form">
        <Form
          layout="vertical"
          autoComplete="off"
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            label={emailLable}
            name="emailId"
            rules={Validation('email')}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={passwordLable}
            name="password"
            rules={Validation('password')}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item className="rem-wrap">
            {remember && (
              <Checkbox name="remember">{t('REMEMBER_ME')}</Checkbox>
            )}
            <Link to="/forgot-password">{t('LOST_PASSWORD')}?</Link>
          </Form.Item>

          <Form.Item className="login-btn">
            <Button type="primary" htmlType="submit">
              {loginBtnText}
            </Button>
          </Form.Item>
          {isGoogleAuthentication && (
            <Form.Item className="continue-wrap">
              <Button type="default" htmlType="submit" icon={<GoogleIcon />}>
                {t('CONTINUE_WITH_GOOGLE')}
              </Button>

              {/* <GoogleOAuthProvider clientId="675057569535-0trjll3gbpm7r2uad80ded71cet9l8a2.apps.googleusercontent.com">
                <Button type="default" icon={<GoogleIcon />}>
                  {t('CONTINUE_WITH_GOOGLE')}
                </Button>
                <GoogleLogin onSuccess={handleLoginSuccess} />
              </GoogleOAuthProvider> */}
            </Form.Item>
          )}

          <Form.Item className="main-login-footer">
            <span className="login-footer">
              {createNewAccText}{' '}
              <Link to={routeConstant.public.signup.path}>
                {t('CREATE_ACCOUNT')}
              </Link>
            </span>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
