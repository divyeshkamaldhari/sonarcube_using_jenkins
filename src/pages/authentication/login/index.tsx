import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { routeConstant } from '../../../constants/routes';
import { useMutation } from '@tanstack/react-query';
import { loginUser } from '../../../redux/actions/authentication/auth';
import { ShowNotification } from '../../../utils/notification';
import loginPageLeftImage from '../../../assets/images/loginRightImage.png';
import { LoginComponent } from './login';
import './style.scss';
import { setLocalStorageItem } from '../../../utils/local-storage';
import { getIpAddressData } from '../../../utils/get-ip-address';
import { encodeBase64, encryptData } from '../../../utils/common/crypto-utils';
// import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

export const Login: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [userActivity, setUserActivity] = useState<
    { ip: string; location: string } | undefined
  >({ ip: '', location: '' });

  useEffect(() => {
    getIpAddressData()
      .then((getActivity) => {
        setUserActivity(getActivity);
      })
      .catch((error) => {
        console.error('Error fetching IP address data:', error);
      });
  }, []);
  const { mutate: mutateLogin } = useMutation({
    mutationKey: ['LOGINNED_USER'],
    mutationFn: loginUser,
    onSuccess: (data) => {
      const access_token: string = data?.token ?? '';
      const uid: string = data?._id ?? '';
      setLocalStorageItem('token', access_token);
      setLocalStorageItem('uid', uid);
      // Please note: The IP address provided here is for reference only. Once the backend APIs are restructured, the developer should provide the updated IP address details during the login process.
      setLocalStorageItem('ipAddress', userActivity?.ip ?? '');
      navigate(`${routeConstant.app.profile.path}`);

      ShowNotification({
        message: 'Login successfully!',
        type: 'success',
      });
    },
  });

  const onFinish = async (values: { email: string; password: string }) => {
    const encryptedData = encryptData({
      ...values,
      password: encodeBase64(values.password),
      userActivity,
    });
    await mutateLogin({ data: encryptedData });
  };

  // const handleLoginSuccess = (response) => {
  //   console.log('Login Success:', response);
  // };

  // const handleLoginFailure = (response) => {
  //   console.log('Login Failed:', response);
  // };

  return (
    <>
      {/* login page 1 */}
      {/* <div className="login login-one">
        <div className="login-wrap">
          <div className="login-left">
            <div className="login-logo">
              <LoginPageLogo2 />
              <h2>{t("BOILERPLATE")}</h2>
            </div>
            <div className="login-content">
              <h1>{t('WELCOME')}.</h1>
              <p>{t('START_JOURNEY_TEXT_DESCRIPTION')}</p>
            </div>
          </div>
          <div className="login-right">
            <LoginComponent
              onFinish={onFinish}
              heading={t('LOGIN_HEADING_1')}
              emailLable={t('EMAIL_LABLE')}
              passwordLable={t('PASSWORD')}
              loginBtnText={t('LOGIN')}
              createNewAccText={t('NOT_REGISTERED')}
              isGoogleAuthentication
              remember
            />
          </div>
        </div>
      </div> */}

      {/* login page 2 */}
      {/* <div className="login login-two">
        <div className="login-logo">
          <LoginPageLogo2 />
          <h2>{t("BOILERPLATE")}</h2>
        </div>
        <div className="login-right">
          <LoginComponent
            LoginPageIcon={LoginPageIcon}
            onFinish={onFinish}
            heading={t("LOGIN_HEADING_2")}
            emailLable={t("EMAIL")}
            passwordLable={t('PASSWORD')}
            loginBtnText={t('LOGIN_NOW')}
            createNewAccText={t("DON'T_HAVE_ACCOUNT")}
            remember
          />
        </div>
      </div> */}

      {/* login page 3 */}
      <div className="login login-three">
        <div className="lt-wrap">
          <div className="login-image-sec">
            <h3>{t('SOCIAL_MEDIA_TEXT_DESCRIPTION')}</h3>
            <img src={loginPageLeftImage} alt={loginPageLeftImage} />
          </div>
          <div className="login-right">
            <LoginComponent
              onFinish={onFinish}
              heading={t('LOGIN_HEADING_2')}
              description={t('LOGIN_DESCRIPTION_3')}
              emailLable={t('EMAIL')}
              passwordLable={t('PASSWORD')}
              loginBtnText={t('LOGIN_NOW')}
              createNewAccText={t("DON'T_HAVE_ACCOUNT")}
              isGoogleAuthentication
              remember
            />
          </div>
        </div>
      </div>

      {/* <GoogleOAuthProvider clientId="675057569535-0trjll3gbpm7r2uad80ded71cet9l8a2.apps.googleusercontent.com">
        <div>
          <h1>Login with Google</h1>
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginFailure}
          />
        </div>
      </GoogleOAuthProvider> */}
    </>
  );
};
