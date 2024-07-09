import { TourProvider } from '@reactour/tour';

export const TourProviderWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const steps = [
    {
      selector: '[data-tour="step-1"]',
      content: 'You can find blogs here with different category',
    },
    {
      selector: '[data-tour="step-2"]',
      content: 'You can change language from here',
    },
    {
      selector: '[data-tour="step-3"]',
      content: 'Hover on button and click on user profile.',
    },
    {
      selector: '[data-tour="step-4"]',
      content: 'you can update your profile',
    },
  ];
  return <TourProvider steps={steps}>{children}</TourProvider>;
};
