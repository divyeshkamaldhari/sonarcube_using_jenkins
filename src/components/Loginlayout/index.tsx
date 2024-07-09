import { Navigate, Outlet, useNavigate } from 'react-router-dom';

import { routeConstant } from '../../constants/routes';
import { MultilingualComponent } from '../common/multilingual-options';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getLocalStorageItem } from '../../utils/local-storage';

export const LoginLayout = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const isAuthorized = getLocalStorageItem('token');
  if (isAuthorized) {
    navigate(`${routeConstant.app.profile.path}`);
  }

  useEffect(() => {
    if (getLocalStorageItem('selected_language')) {
      i18n.changeLanguage(getLocalStorageItem('selected_language') || 'en');
    } else {
      i18n.changeLanguage('en');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return !isAuthorized ? (
    <div>
      <MultilingualComponent />
      <Outlet />
    </div>
  ) : (
    <Navigate replace to={routeConstant.app.profile.path} />
  );
};
