import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  return <div>{t('FOOTER_CONTENT_TEXT')}</div>;
};
