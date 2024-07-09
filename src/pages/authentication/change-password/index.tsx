import { FC } from 'react';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { routeConstant } from '../../../constants/routes';
import { Validation } from '../../../constants/validations';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { changepassword } from '../../../redux/actions/authentication/auth';
import { ShowNotification } from '../../../utils/notification';
import { ChangePasswordProp } from '../../../intefaces/pages/authentication/user/user.interfaces';
import { AuthUserDataProps } from '../../../intefaces/pages/authentication/signup/signup.interfaces';
import './style.scss';
import { useTranslation } from 'react-i18next';

export const ChangePassword: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ['CHANGE_PASSWORD_USER'],
    mutationFn: changepassword,
    onSuccess: () => {
      ShowNotification({
        message: 'User password change sucessfully',
        type: 'success',
      });
      navigate(`${routeConstant.app.profile.path}`);
    },
    onError(error) {
      ShowNotification({
        message: error.message,
        type: 'error',
      });
    },
  });

  const onFinish = (values: ChangePasswordProp) => {
    const userDetail = queryClient.getQueryData<AuthUserDataProps>([
      'USER_DETAILS',
    ]);
    values.id = userDetail?._id;
    mutate(values);
  };

  return (
    <Form
      className="change-pass"
      autoComplete="off"
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      layout="vertical"
    >
      <Form.Item
        label={t('OLD_PASSWORD')}
        name="oldPassword"
        rules={Validation('password')}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label={t('NEW_PASSWORD')}
        name="newPassword"
        rules={Validation('password')}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label={t('CONFIRM_PASSWORD')}
        name="cpassword"
        rules={[
          { required: true, message: 'Confirm password is required' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              ``;
              if (!value || getFieldValue('newPassword') === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error('Confirm Password does not match with New password!'),
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isPending}>
          {t('CHANGE_PASSWORD')}
        </Button>
      </Form.Item>
    </Form>
  );
};
