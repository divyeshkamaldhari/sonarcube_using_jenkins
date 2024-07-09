import { useNavigate } from 'react-router-dom';
import { QueryCache, useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import {
  fetchSingleUser,
  logoutUser,
} from '../../../redux/actions/authentication/auth';
import { Layout, Menu, Dropdown, Avatar } from 'antd';
import { useTranslation } from 'react-i18next';
import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { routeConstant } from '../../../constants/routes';
import { getProfileImage } from '../../../utils/common';
import { MultilingualComponent } from '../multilingual-options';
import {
  getLocalStorageItem,
  removeLocalStorageItem,
  setLocalStorageItem,
} from '../../../utils/local-storage';
import { useTour } from '@reactour/tour';
import { BoilerPlateLogo } from '../../../assets/svg-images';
import './style.scss';

const { Header } = Layout;

export const HeaderComponent = () => {
  const { t, i18n } = useTranslation();
  const { setIsOpen } = useTour();

  const queryCache = new QueryCache();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = getLocalStorageItem('uid') ?? '';

  const { data: userDetails = {} } = useQuery({
    queryKey: ['USER_DETAILS'],
    queryFn: () => fetchSingleUser(userId),
    enabled: userId ? true : false,
    staleTime: 600000,
  });

  const handleSignOut = () => {
    logoutUser()
      .then(() => {
        queryCache.clear();
        dispatch({ type: 'LOGOUT_SUCCESS' });
        removeLocalStorageItem('token');
        i18n.changeLanguage('en');
        setLocalStorageItem('selected_language', 'en');
        removeLocalStorageItem('uid');
        navigate(`${routeConstant.public.login.path}`);
      })
      .catch(() => {
        dispatch({ type: 'LOGOUT_FAILURE' });
      });
  };

  const profileMenuItems = (
    <Menu>
      <Menu.Item key="1">
        <Link to={routeConstant.app.profile.path}>{t('VIEW_PROFILE')}</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to={routeConstant.app.changePassword.path}>
          {t('CHANGE_PASSWORD')}
        </Link>
      </Menu.Item>
      <Menu.Item key="3" onClick={handleSignOut}>
        {t('SIGN_OUT')}
      </Menu.Item>
    </Menu>
  );

  const leftSideHeader = (
    <Menu
      mode="horizontal"
      defaultSelectedKeys={['1']}
      style={{
        flex: 1,
        minWidth: 0,
        background: '#1481e9',
      }}
      className="menu-leftSideHeader"
    >
      <Menu.Item key="1">
        <Link to={routeConstant.app.initialHome.path} className="logo">
          <BoilerPlateLogo />
          Boilerplate
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to={routeConstant.app.blog.initalBlog.path} data-tour="step-1">
          {t('BLOG')}
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <div onClick={() => setIsOpen(true)}>{t('START_TOUR')}</div>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className="header-component">
      <div className="left-nav">{leftSideHeader}</div>
      <div className="right-nav">
        <div className="language-selection" style={{ marginLeft: 20 }}>
          <MultilingualComponent />
        </div>
        <div className="profile-menu-item" style={{ marginLeft: 20 }}>
          <Dropdown overlay={profileMenuItems}>
            <a
              className="ant-dropdown-link"
              data-tour="step-3"
              onClick={(e) => e.preventDefault()}
            >
              <Avatar src={getProfileImage(userDetails)} />
              <DownOutlined className="down-icon" />
            </a>
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};
