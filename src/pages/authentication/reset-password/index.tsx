import { FC, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { routeConstant } from '../../../constants/routes';
import { Validation } from '../../../constants/validations';
import { useMutation } from '@tanstack/react-query';
import {
  resetpassword,
  verifyKey,
} from '../../../redux/actions/authentication/auth';
import { ShowNotification } from '../../../utils/notification';
import { ResetPasswordProp } from '../../../intefaces/pages/authentication/signup/signup.interfaces';
import { useTranslation } from 'react-i18next';
import LinkExpired from '../../../components/common/link-expired';

export const ResetPassword: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { key } = useParams();

  const { mutate: mutateverifyKey, isError: isErrorVerifyKey } = useMutation({
    mutationKey: ['VERIFY-KEY'],
    mutationFn: verifyKey,
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ['RESET_PASSWORD_USER'],
    mutationFn: resetpassword,
    onSuccess: () => {
      ShowNotification({
        message: 'User password reset sucessfully',
        type: 'success',
      });
      navigate(`${routeConstant.public.login.path}`);
    },
    onError(error) {
      ShowNotification({
        message: error.message,
        type: 'error',
      });
    },
  });

  const onFinish = (values: ResetPasswordProp) => {
    values.keys = key;
    mutate(values);
  };

  useEffect(() => {
    if (key) {
      mutateverifyKey(key);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  if (isErrorVerifyKey) {
    return <LinkExpired errorMessage={'The key has been expire'} />;
  }
  return (
    <Form
      autoComplete="off"
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        label={t('NEW_PASSWORD')}
        name="password"
        rules={Validation('password')}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label={t('CONFIRM_PASSWORD')}
        name="cpassword"
        rules={Validation('password')}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isPending}>
          {t('RESET_PASSWORD')}
        </Button>
      </Form.Item>

      <Form.Item>
        <span>
          {t('ALREADY_HAVE_ACCOUNT')}{' '}
          <Link to={routeConstant.public.login.path}>{t('LOGIN')}</Link>
        </span>
      </Form.Item>
    </Form>
  );
};
