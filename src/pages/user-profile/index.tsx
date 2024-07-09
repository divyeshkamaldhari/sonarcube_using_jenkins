import {
  CameraOutlined,
  CloseOutlined,
  DeleteOutlined,
  EyeOutlined,
  LoadingOutlined,
} from '@ant-design/icons';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button, Form, Input, Modal, Upload, message } from 'antd';
import ImgCrop from 'antd-img-crop';
import { UploadChangeParam } from 'antd/es/upload';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Validation } from '../../constants/validations';
import { AuthUserDataProps } from '../../intefaces/pages/authentication/signup/signup.interfaces';
import { updateUserProfileDetail } from '../../redux/actions/authentication/auth';
import { getProfileImage } from '../../utils/common';
import { ShowNotification } from '../../utils/notification';
import './UserProfile.scss';

export const UserProfile = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const userDetails =
    queryClient.getQueryData<AuthUserDataProps>(['USER_DETAILS']) || {};
  const [editMode, setEditMode] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [hovering, setHovering] = useState(false);
  const [previewImageVisible, setPreviewImageVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateUserProfile = useMutation({
    mutationKey: ['UPDATE_USER_PROFILE_DETAILS'],
    mutationFn: updateUserProfileDetail,
    onSuccess: (data) => {
      queryClient.setQueryData(
        ['USER_DETAILS'],
        (oldUsers: AuthUserDataProps) => {
          if (oldUsers && oldUsers._id === data._id) {
            return data;
          } else {
            return oldUsers;
          }
        },
      );

      setEditMode(false);
      setLoading(false);
      if (data.profileImage?.trim() === '') {
        ShowNotification({
          message: 'User profile image deleted successfully!',
          type: 'success',
        });
      } else {
        setHovering(false);
        ShowNotification({
          message: 'User profile image updated successfully!',
          type: 'success',
        });
      }
    },
    onError(error) {
      setLoading(false);
      console.log('error', error);
    },
  });

  const onFinish = (values: AuthUserDataProps) => {
    updateUserProfile.mutate({ ...values, _id: userDetails?._id });
  };

  const handleChange = (info: UploadChangeParam) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      setLoading(false);
      setImageUrl(info.file.response.url);
    } else if (info.file.status === 'error') {
      setLoading(false);
      message.error('Image upload failed.');
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleProfileChanges = ({ file }: any) => {
    updateUserProfile.mutate({ _id: userDetails?._id, profileImage: file });
  };

  const handleDeleteImage = () => {
    setLoading(true);
    updateUserProfile.mutate(
      {
        _id: userDetails?._id,
        profileImage: '',
      },
      {
        onSuccess: () => {
          setLoading(false);
          setImageUrl('');
        },
        onError: () => {
          setLoading(false);
        },
      },
    );
  };

  return (
    <div className="user-profile-container">
      <div className="profile-picture">
        <h2 className="user-profile-title">{t('USER_PROFILE_PAGE')}</h2>

        <div
          className="avtar-area"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => {
            setHovering(false);
          }}
          style={{ position: 'relative', display: 'inline-block' }}
        >
          <ImgCrop rotationSlider>
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              onChange={handleChange}
              customRequest={handleProfileChanges}
            >
              {loading ? (
                <LoadingOutlined style={{ fontSize: 24 }} />
              ) : imageUrl ? (
                <img
                  src={imageUrl}
                  alt="Profile"
                  style={{
                    width: '100%',
                    filter: hovering ? 'blur(8px)' : 'none',
                  }}
                />
              ) : (
                <div className="initials-avatar">
                  <img
                    src={getProfileImage(userDetails)}
                    alt=""
                    style={{
                      filter: hovering ? 'blur(8px)' : 'none',
                    }}
                  />
                </div>
              )}
            </Upload>
          </ImgCrop>
          {hovering && userDetails?.profileImage && (
            <>
              <div className="delete-icon-container">
                <Button
                  icon={
                    <DeleteOutlined
                      id="delete-icon"
                      style={{
                        fontSize: '26px',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                      }}
                    />
                  }
                  style={{
                    position: 'absolute',
                    top: '40%',
                    left: '70%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '50%',
                    backgroundColor: 'transparent',
                    zIndex: 1,
                    height: '30px',
                    width: '30px',
                    border: 'none',
                  }}
                  className="delete-button"
                  onClick={handleDeleteImage}
                />
              </div>
              <div className="eye-icon-container">
                <Button
                  icon={
                    <EyeOutlined
                      style={{
                        fontSize: '26px',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                      }}
                    />
                  }
                  style={{
                    position: 'absolute',
                    top: '40%',
                    left: '30%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '50%',
                    zIndex: 1,
                    height: '30px',
                    width: '30px',
                    border: 'none',
                    backgroundColor: 'transparent',
                  }}
                  onClick={() => setPreviewImageVisible(true)}
                />
              </div>
            </>
          )}
          <ImgCrop rotationSlider>
            <Upload
              name="avatar"
              showUploadList={false}
              onChange={handleChange}
              customRequest={handleProfileChanges}
            >
              <Button
                icon={
                  <CameraOutlined
                    id="camera-icon"
                    style={{
                      fontSize: '20px',
                    }}
                  />
                }
                style={{
                  position: 'absolute',
                  bottom: -5,
                  right: 9,
                  transform: 'translate(50%, -50%)',
                  borderRadius: '50%',
                  backgroundColor: '#fff',
                  height: '35px',
                  width: '35px',
                  fontSize: '30px',
                  color: 'black',
                }}
              />
            </Upload>
          </ImgCrop>
        </div>
      </div>

      {editMode ? (
        <Form
          className="user-from"
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          initialValues={userDetails}
          layout="vertical"
          requiredMark={editMode}
        >
          <Form.Item
            label={t('FIRST_NAME')}
            name="firstName"
            rules={Validation('required', 'firstName')}
          >
            <Input defaultValue={userDetails?.firstName} />
          </Form.Item>
          <Form.Item
            label={t('LAST_NAME')}
            name="lastName"
            rules={Validation('required', 'lastName')}
          >
            <Input defaultValue={userDetails?.lastName} />
          </Form.Item>

          <Form.Item
            label={t('EMAIL')}
            name="emailId"
            rules={Validation('email')}
          >
            <Input defaultValue={userDetails?.emailId} />
          </Form.Item>

          <div className="user-profile-btn-wrap">
            {editMode && (
              <Button onClick={() => setEditMode(!editMode)}>
                {t('CANCEL')}
              </Button>
            )}
            {editMode && (
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  {t('SAVE_CHANGES')}
                </Button>
              </Form.Item>
            )}
          </div>
        </Form>
      ) : (
        <div className="user-detail">
          <div className="user-detail-wrap">
            <span className="user-title">{t('FIRST_NAME')}:</span>
            <span className="user-info">{userDetails?.firstName}</span>
          </div>
          <div className="user-detail-wrap">
            <span className="user-title">{t('LAST_NAME')}:</span>
            <span className="user-info">{userDetails?.lastName}</span>
          </div>
          <div className="user-detail-wrap">
            <span className="user-title">{t('EMAIL')}:</span>
            <span className="user-info">{userDetails?.emailId}</span>
          </div>
        </div>
      )}
      {!editMode && (
        <Button onClick={() => setEditMode(!editMode)} data-tour="step-4">
          {t('EDIT')}
        </Button>
      )}

      <Modal
        visible={previewImageVisible}
        onCancel={() => setPreviewImageVisible(false)}
        footer={null}
        className="image-preview-modal"
        closable={false}
      >
        <div className="image-preview">
          <img src={imageUrl || getProfileImage(userDetails)} alt="Preview" />
          <div
            className="close-button"
            onClick={() => setPreviewImageVisible(false)}
          >
            <CloseOutlined
              style={{
                fontSize: '35px',
                fontWeight: 'bold',
              }}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};
