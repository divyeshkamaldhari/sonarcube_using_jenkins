import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { routeConstant } from '../../constants/routes';
import { fetchSingleUser } from '../../redux/actions/authentication/auth';
import {
  getLocalStorageItem,
  removeLocalStorageItem,
} from '../../utils/local-storage';
import { ShowNotification } from '../../utils/notification';
import { Footer } from '../common/footer';
import { HeaderComponent } from '../common/header';

export const Layout = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (getLocalStorageItem('selected_language')) {
      i18n.changeLanguage(getLocalStorageItem('selected_language') || 'en');
    } else {
      i18n.changeLanguage('en');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isAuthorized = getLocalStorageItem('token');
  if (!isAuthorized) {
    navigate(`${routeConstant.public.login.path}`);
  }

  const userId = getLocalStorageItem('uid') ?? '';

  const { error: userError, isFetching } = useQuery({
    queryKey: ['USER_DETAILS'],
    queryFn: () => fetchSingleUser(userId),
    enabled: userId ? true : false,
  });

  if (userError) {
    ShowNotification({
      message: 'Unaurthorized api',
      type: 'error',
    });
    navigate(`${routeConstant.public.login.path}`);
    removeLocalStorageItem('token');
  }
  if (isFetching) {
    return <div>Loding</div>;
  }

  return isAuthorized ? (
    <div>
      <HeaderComponent />
      <Outlet />
      <Footer />
    </div>
  ) : (
    <Navigate replace to={routeConstant.public.login.path} />
  );
};
