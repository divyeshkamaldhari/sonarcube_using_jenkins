import { Button, DatePicker, Form, Input } from 'antd';
import { Validation } from '../../../constants/validations';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { routeConstant } from '../../../constants/routes';
import { AuthUserDataProps } from '../../../intefaces/pages/authentication/signup/signup.interfaces';
import { GoogleIcon } from '../../../assets/svg-images';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localeData from 'dayjs/plugin/localeData';
import weekday from 'dayjs/plugin/weekday';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import weekYear from 'dayjs/plugin/weekYear';

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);

interface SignupFormComponentProps {
  onFinish: (values: AuthUserDataProps) => void;
  heading: string;
  isPending: boolean;
  isGoogleAuthentication?: boolean;
  signupPage: number;
  signupBtnText: string;
  alreadyRegisterText: string;
  description?: string;
  SignupPageIcon?: React.ElementType;
  disabledDate: (current: object) => boolean;
}

export const SignupFormComponent = ({
  onFinish,
  isPending,
  isGoogleAuthentication,
  heading,
  signupPage,
  signupBtnText,
  alreadyRegisterText,
  SignupPageIcon,
  description,
  disabledDate,
}: SignupFormComponentProps) => {
  const { t } = useTranslation();
  const defaultValue = dayjs();
  return (
    <div className="main-login-form">
      <div className="login-heading">
        {SignupPageIcon && <SignupPageIcon />}
        <h3>{heading}</h3>
        {description && <p>{description}</p>}
      </div>
      <div className="login-form">
        <Form
          layout="vertical"
          autoComplete="off"
          name="basic"
          onFinish={onFinish}
          initialValues={{ dob: defaultValue }}
        >
          <div className="form-wrap">
            {(signupPage === 1 || signupPage === 2) && (
              <Form.Item
                label={t('FULL_NAME')}
                name="fullName"
                rules={Validation('required', 'fullName')}
              >
                <Input />
              </Form.Item>
            )}
            {signupPage === 3 && (
              <Form.Item
                label={t('FIRST_NAME')}
                name="firstName"
                rules={Validation('required', 'firstName')}
              >
                <Input />
              </Form.Item>
            )}
            {signupPage === 3 && (
              <Form.Item
                label={t('LAST_NAME')}
                name="lastName"
                rules={Validation('required', 'lastName')}
              >
                <Input />
              </Form.Item>
            )}
          </div>
          <div className="form-wrap">
            <Form.Item
              label={t('EMAIL')}
              name="emailId"
              rules={Validation('email')}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={t('PHONE')}
              name="contact"
              rules={Validation('phoneNumber', 'contact')}
            >
              <Input />
            </Form.Item>
          </div>
          <div className="form-wrap">
            {signupPage === 3 && (
              <Form.Item
                label={t('SELECT_DATE_OF_BIRTH')}
                name="dob"
                rules={Validation('dob')}
              >
                <DatePicker disabledDate={disabledDate} format="MMM DD, YYYY" />
              </Form.Item>
            )}
          </div>
          <div className="form-wrap">
            {signupPage === 3 && (
              <>
                <Form.Item
                  label={t('PASSWORD')}
                  name="password"
                  rules={Validation('password')}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  label={t('CONFIRM_PASSWORD')}
                  name="confirmPassword"
                  dependencies={['password']}
                  rules={Validation('confirmPassword')}
                >
                  <Input.Password />
                </Form.Item>
              </>
            )}
          </div>
          <Form.Item className="login-btn">
            <Button type="primary" htmlType="submit" loading={isPending}>
              {signupBtnText}
            </Button>
          </Form.Item>
          {isGoogleAuthentication && (
            <Form.Item className="continue-wrap">
              <Button type="default" htmlType="submit" icon={<GoogleIcon />}>
                {t('CONTINUE_WITH_GOOGLE')}
              </Button>
            </Form.Item>
          )}

          <Form.Item className="main-login-footer">
            <span className="login-footer">
              {alreadyRegisterText}{' '}
              <Link to={routeConstant.public.login.path}>{t('LOGIN_NOW')}</Link>
            </span>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
