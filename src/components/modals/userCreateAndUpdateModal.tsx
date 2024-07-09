import { Modal, Form, Input } from 'antd';
import { Validation } from '../../constants/validations';
import { UserModalProps } from '../../intefaces/components/modals/modals.interfaces';
import { useTranslation } from 'react-i18next';

const UserCreateAndUpdateModal: React.FC<UserModalProps> = ({
  open,
  setOpen,
  dispatchAction,
  isFormReset,
  isUser,
  modalAction,
}) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  //handle close modal
  const onClose = () => {
    setOpen(false);
  };
  // reset all field after submmited data
  if (isFormReset) {
    form.resetFields();
  }
  return (
    <Modal
      open={open}
      title={modalAction === 'createUser' ? t('CREATE_USER') : t('UPDATE_USER')}
      okText={modalAction === 'createUser' ? t('CREATE') : t('UPDATE')}
      onCancel={onClose}
      onOk={() => {
        form.validateFields().then((values) => {
          dispatchAction(modalAction, values);
        });
      }}
      width={800}
    >
      <Form
        form={form}
        initialValues={isUser}
        layout="vertical"
        requiredMark={false}
      >
        <Form.Item
          name="fname"
          label={t('FIRST_NAME')}
          rules={Validation('required', 'firstname')}
        >
          <Input placeholder="Please enter your firstName" />
        </Form.Item>

        <Form.Item
          name="lname"
          label={t('LAST_NAME')}
          rules={Validation('required', 'lastname')}
        >
          <Input placeholder="Please enter your lastName" />
        </Form.Item>

        <Form.Item
          name="age"
          label={t('AGE')}
          rules={Validation('required', 'age')}
        >
          <Input placeholder="Please enter your age" />
        </Form.Item>

        <Form.Item
          name="address"
          label={t('ADDRESS')}
          rules={Validation('required', 'address')}
        >
          <Input placeholder="Please enter your address" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserCreateAndUpdateModal;
