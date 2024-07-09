import { FC, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { routeConstant } from '../../../constants/routes';
import { Validation } from '../../../constants/validations';
import { useMutation } from '@tanstack/react-query';
import { forgotUser } from '../../../redux/actions/authentication/auth';
import { ShowNotification } from '../../../utils/notification';
import { AuthUserDataProps } from '../../../intefaces/pages/authentication/signup/signup.interfaces';
import { ActionCompleted } from '../../../components/modals/action-completed';
import { useTranslation } from 'react-i18next';

export const Forgot: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isActionCompleted, setIsActionCompleted] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationKey: ['FORGOT_PASSWORD'],
    mutationFn: forgotUser,
    onSuccess: () => {
      setIsActionCompleted(true);
    },
    onError(error) {
      ShowNotification({
        message: error.message,
        type: 'error',
      });
    },
  });

  const onFinish = (values: AuthUserDataProps) => {
    mutate(values);
  };

  return (
    <>
      <Form
        autoComplete="off"
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          label={t('EMAIL')}
          name="emailId"
          rules={Validation('email')}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isPending}>
            {t('FORGOT')}
          </Button>
        </Form.Item>

        <Form.Item>
          <span>
            {t('ALREADY_HAVE_ACCOUNT')}{' '}
            <Link to={routeConstant.public.login.path}>{t('LOGIN')}</Link>
          </span>
        </Form.Item>
      </Form>
      <ActionCompleted
        isOpen={isActionCompleted}
        message={t('RESET_PASSWORD_SUCCESS_MESSAGE')}
        onClose={() => setIsActionCompleted(false)}
        buttonProps={{
          type: 'primary',
          onClick: () => navigate(`${routeConstant.public.login.path}`),
          children: t('GO_TO_LOGIN'),
        }}
      />
    </>
  );
};
