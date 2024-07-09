import { NavigateFunction } from 'react-router-dom';

export const globalRedirectConfig = {
  delayBeforeRedirect: async ({
    navigate,
    path,
    delay,
    isDelay,
  }: {
    navigate: NavigateFunction;
    path: string | '';
    delay?: number;
    isDelay?: boolean;
  }) => {
    if (isDelay) {
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
    navigate(path);
  },
};
