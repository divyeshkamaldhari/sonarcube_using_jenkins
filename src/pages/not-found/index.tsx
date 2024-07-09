import { useTranslation } from 'react-i18next';

export const NotFoundPage = () => {
  const { t } = useTranslation();
  return <h1>{t('PAGE_NOT_FOUND')}</h1>;
};
