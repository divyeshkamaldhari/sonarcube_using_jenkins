import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginLayout } from '../../components/Loginlayout';
import { Layout } from '../../components/layout';
import { routeConstant } from '../../constants/routes';
import { Forgot } from '../../pages/authentication/forgot';
import { Login } from '../../pages/authentication/login';
import { ResetPassword } from '../../pages/authentication/reset-password';
import { SetPassword } from '../../pages/authentication/set-password';
import { Signup } from '../../pages/authentication/signup';
import { Blog } from '../../pages/blog';
import { ChangePassword } from '../../pages/authentication/change-password';
import { Home } from '../../pages/home';
import { NotFoundPage } from '../../pages/not-found';
import { UserProfile } from '../../pages/user-profile';
import { BlogCategory } from '../../pages/blog/blog-category';
import { SingleBlog } from '../../pages/blog/single-blog';

export const RouteList: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routeConstant.app.initialHome.path} element={<Layout />}>
          <Route path={routeConstant.app.initialHome.path} element={<Home />} />
          <Route
            path={routeConstant.app.profile.path}
            element={<UserProfile />}
          />
          <Route
            path={routeConstant.app.changePassword.path}
            element={<ChangePassword />}
          />
          <Route
            path={routeConstant.app.blog.initalBlog.path}
            element={<Blog />}
          />
          <Route
            path={routeConstant.app.blog.category.path}
            element={<BlogCategory />}
          />
          <Route
            path={routeConstant.app.blog.subcategory.path}
            element={<SingleBlog />}
          />
        </Route>
        <Route
          path={routeConstant.app.initialHome.path}
          element={<LoginLayout />}
        >
          <Route path={routeConstant.public.login.path} element={<Login />} />
          <Route path={routeConstant.public.signup.path} element={<Signup />} />
          <Route path={routeConstant.public.forgot.path} element={<Forgot />} />
          <Route
            path={routeConstant.public.reset_password.path}
            element={<ResetPassword />}
          />
          <Route
            path={routeConstant.public.set_password.path}
            element={<SetPassword />}
          />
          <Route
            path={routeConstant.pageNotFound.path}
            element={<NotFoundPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
