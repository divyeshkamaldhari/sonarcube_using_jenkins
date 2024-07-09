import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { routeConstant } from '../../../constants/routes';
import { useMutation } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { registerUser } from '../../../redux/actions/authentication/auth';
import { ShowNotification } from '../../../utils/notification';
import { AuthUserDataProps } from '../../../intefaces/pages/authentication/signup/signup.interfaces';
import { SignupFormComponent } from './signup';
import { ActionCompleted } from '../../../components/modals/action-completed';
import '../login/style.scss';
import './style.scss';
import loginPageLeftImage from '../../../assets/images/loginRightImage.png';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { encodeBase64, encryptData } from '../../../utils/common/crypto-utils';
dayjs.extend(utc);

export const Signup: FC = () => {
  const { t } = useTranslation();
  const [isActionCompleted, setIsActionCompleted] = useState(false);
  const navigate = useNavigate();

  //Signup submit mutation
  const { mutate, isPending } = useMutation({
    mutationKey: ['REGISTER_USER'],
    mutationFn: registerUser,
    onSuccess: () => {
      setIsActionCompleted(true);
      ShowNotification({
        message: 'User registred sucessfully',
        type: 'success',
      });
    },
  });

  const disabledDate = (current: object) => {
    return current && current > dayjs().endOf('day');
  };

  //Signup submit event
  const onFinish = (values: AuthUserDataProps) => {
    values.dob = dayjs.utc(values.dob).toISOString();
    if (values.password === values.confirmPassword) {
      delete values.confirmPassword;
    }
    const encryptedData = encryptData({
      ...values,
      password: values.password ? encodeBase64(values.password) : '',
    });
    mutate({ data: encryptedData });
  };

  return (
    <>
      {/* Signup page 1 */}
      {/* <div className="login login-one signup-one">
        <div className="login-wrap">
          <div className="login-left">
            <div className="login-logo">
              <LoginPageLogo2 />
              <h2>{t("BOILERPLATE")}</h2>
            </div>
            <div className="login-content">
              <h1>{t('WELCOME')}.</h1>
              <p>{t("START_JOURNEY_TEXT_DESCRIPTION")}</p>
            </div>
          </div>
          <div className="login-right">
            <SignupFormComponent
              onFinish={onFinish}
              isPending={isPending}
              heading={t("SIGNUP")}
              isGoogleAuthentication
              signupPage={1}
              signupBtnText={t("SIGNUP")}
              alreadyRegisterText={t("ALREADY_REGISTERED")}
            />
          </div>
        </div>
      </div> */}

      {/* Signup page 2 */}
      {/* <div className="login login-two signup-two">
        <div className="login-logo">
          <LoginPageLogo2 />
          <h2>{t("BOILERPLATE")}</h2>
        </div>
        <div className="login-right">
          <SignupFormComponent
            SignupPageIcon={LoginPageIcon}
            onFinish={onFinish}
            isPending={isPending}
            heading={t("CREATE_ACCOUNT")}
            signupPage={2}
            signupBtnText={t("CREATE_ACCOUNT")}
            alreadyRegisterText={t("ALREADY_HAVE_ACCOUNT")}
          />
        </div>
      </div> */}

      {/* Signup page 3 */}
      <div className="login login-three signup-three">
        <div className="lt-wrap">
          <div className="login-image-sec">
            <h3>{t('SOCIAL_MEDIA_TEXT_DESCRIPTION')}</h3>
            <img src={loginPageLeftImage} alt={loginPageLeftImage} />
          </div>
          <div className="login-right">
            <SignupFormComponent
              onFinish={onFinish}
              isPending={isPending}
              heading={t('CREATE_ACCOUNT')}
              description={t('SIGNUP_DESCRIPTION_3')}
              signupPage={3}
              signupBtnText={t('CREATE_ACCOUNT')}
              isGoogleAuthentication
              alreadyRegisterText={t('ALREADY_HAVE_ACCOUNT')}
              disabledDate={disabledDate}
            />
          </div>
        </div>
      </div>

      <ActionCompleted
        isOpen={isActionCompleted}
        message={t('CHECK_CONFIRMATION_EMAIL_MESSAGE')}
        onClose={() => setIsActionCompleted(false)}
        buttonProps={{
          type: 'primary',
          onClick: () => navigate(`${routeConstant.public.login.path}`),
          children: t('GO_TO_LOGIN'),
        }}
      />
    </>
  );
};
