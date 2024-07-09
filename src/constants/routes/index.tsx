export const routeConstant = {
  public: {
    login: {
      id: 'login',
      path: '/login',
      title: 'Login',
    },
    signup: {
      id: 'signup',
      path: '/signup',
      title: 'Signup',
    },
    forgot: {
      id: 'forgot',
      path: '/forgot-password',
      title: 'Forgot',
    },
    reset_password: {
      id: 'reset-password',
      path: '/resetpassword/:key',
      title: 'Reset Password',
    },
    set_password: {
      id: 'set-password',
      path: '/setpassword/:key',
      title: 'Set Password',
    },
  },
  app: {
    profile: {
      id: 'user-profile',
      path: '/user-profile',
      title: 'UserProfile',
    },
    initialHome: {
      id: 'initialHome',
      path: '/',
      title: 'Home',
    },
    changePassword: {
      id: 'changePassword',
      path: '/change-password',
      title: 'Change Password',
    },
    blog: {
      initalBlog: {
        id: 'blog',
        path: '/blog',
        title: 'Blog',
      },
      category: {
        id: 'categoryName',
        path: '/blog/category/:categoryName',
        title: 'Category Name',
      },
      subcategory: {
        id: 'slugName',
        path: '/blog/:slugName',
        title: 'slug Name',
      },
    },
  },
  pageNotFound: {
    id: 'pageNotFound',
    path: '*',
    title: 'Page Not Found',
  },
};
