import { useMutation } from '@tanstack/react-query';
import { Button, Form, Input } from 'antd';
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useParams } from 'react-router-dom';
import LinkExpired from '../../../components/common/link-expired';
import { routeConstant } from '../../../constants/routes';
import { Validation } from '../../../constants/validations';
import {
  setpassword,
  verifyKey,
} from '../../../redux/actions/authentication/auth';
import { ShowNotification } from '../../../utils/notification';

export const SetPassword: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { key } = useParams();

  const { mutate: mutateverifyKey, isError: isErrorVerifyKey } = useMutation({
    mutationKey: ['VERIFY-KEY'],
    mutationFn: verifyKey,
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ['RESET_PASSWORD_USER'],
    mutationFn: setpassword,
    onSuccess: () => {
      ShowNotification({
        message: 'User password set sucessfully',
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

  const onFinish = (values: { password?: string; key?: string }) => {
    values.key = key;
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
          {t('SET_PASSWORD')}
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
