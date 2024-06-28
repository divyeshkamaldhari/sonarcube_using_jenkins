import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
} from "antd";
import {
  UserRoleList,
  UserScopeList,
  roles,
} from "../../../components/common/array";

import "./style.scss";

const UserCreateAndEditModal = ({
  open,
  setOpen,
  formData,
  setFormData,
  onValuesChange,
  modalAction,
  dispatchAction,
  permission,
  permissions,
  setPermissions,
}) => {
  const [form] = Form.useForm();

  //for modal close
  const onClose = () => {
    setOpen(false);
  };

  // For user roles
  const handleChange = (selectedRoles) => {
    form.setFieldsValue({
      role: selectedRoles,
    });

    const updatedFormValues = form.getFieldsValue();
    const formDetail = { ...formData };
    formDetail["role"] = updatedFormValues?.role;
    setFormData(formDetail);
  };

  const handleScopeChange = (selectedScope) => {
    form.setFieldsValue({
      scope: selectedScope,
    });

    const updatedFormValues = form.getFieldsValue();
    const formDetail = { ...formData };
    formDetail["scope"] = updatedFormValues?.scope;
    setFormData(formDetail);
  };

  // For handle checkbox options
  const handleCheckBoxOptions = (role) => {
    switch (role) {
      case "products":
        return ["Create", "Update", "Archive", "View"];
      case "shipments":
        return ["View"];
      case "User":
        return ["Create", "Update", "Delete", "View"];
      case "Trash":
        return ["Delete", "UnArchive"];
    }
  };

  // For set inital check box
  const handleInitalChecbox = (role, access) => {
    const foundRole = access?.find((v) => v?.role === role);
    switch (foundRole?.role) {
      case "products":
        return foundRole?.permissions;
      case "shipments":
        return foundRole?.permissions;
      case "User":
        return foundRole?.permissions;
      case "Trash":
        return foundRole?.permissions;
    }
  };

  const handlePermissionChange = (role, permissionArr) => {
    let updatedPermissions = [...permissions];
    const existingPermissionIndex = updatedPermissions.findIndex(
      (p) => p.role === role
    );
    if (existingPermissionIndex === -1) {
      updatedPermissions.push({ role, permissions: permissionArr });
    } else {
      if (permissionArr.length > 0) {
        updatedPermissions[existingPermissionIndex] = {
          ...updatedPermissions[existingPermissionIndex],
          permissions: permissionArr,
        };
      } else {
        updatedPermissions?.splice(existingPermissionIndex, 1);
      }
    }
    setPermissions(updatedPermissions);
    const data = { ...formData };
    data["permissions"] = updatedPermissions;
    setFormData(data);
  };

  return (
    <Modal
      open={open}
      title={modalAction === "addUser" ? "Add New User" : "Update User"}
      onCancel={onClose}
      footer={[
        <Button key="close" onClick={onClose}>
          Cancel
        </Button>,
        <Button
          key="add"
          type="primary"
          onClick={() => {
            form.validateFields().then((values) => {
              const allValuesFilled = Object.values(values).every(
                (value) => value !== undefined && value !== ""
              );
              if (!allValuesFilled) {
                Modal.error({
                  title: "Validation Error",
                  content: "Please fill in all required fields.",
                });
              } else {
                dispatchAction(modalAction);
              }
            });
          }}
        >
          {modalAction === "addUser" ? "Add User" : "Update User"}
        </Button>,
      ]}
      width={800}
    >
      <Form
        form={form}
        name="custom-form"
        layout="vertical"
        onValuesChange={onValuesChange}
        initialValues={{
          ...formData,
          permissions: formData.permissions || [], // Include permissions in initialValues
        }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="firstName"
              label="First Name"
              rules={[{ required: true, message: "Please enter first name" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="lastName"
              label="Last Name"
              rules={[{ required: true, message: "Please enter last name" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="role"
              label="Role"
              rules={[{ required: true, message: "Please select role" }]}
            >
              <Space direction="vertical" style={{ width: "100%" }}>
                <Select
                  // mode="multiple"
                  // allowClear
                  style={{ width: "100%" }}
                  placeholder="Please select"
                  defaultValue={formData.role}
                  onChange={handleChange}
                >
                  {UserRoleList.map((option) => (
                    <Select.Option key={option.value} value={option.value}>
                      {option.label}
                    </Select.Option>
                  ))}
                </Select>
              </Space>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="scope"
              label="Scope"
              rules={[{ required: true, message: "Please enter scope" }]}
            >
              {/* <Input /> */}
              <Space direction="vertical" style={{ width: "100%" }}>
                <Select
                  // mode="multiple"
                  // allowClear
                  style={{ width: "100%" }}
                  placeholder="Please select"
                  defaultValue={formData.scope}
                  onChange={handleScopeChange}
                >
                  {UserScopeList.map((option) => (
                    <Select.Option key={option.value} value={option.value}>
                      {option.label}
                    </Select.Option>
                  ))}
                </Select>
              </Space>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Please select role" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={12}>
          {roles.map((role) => (
            <Col span={6} key={role}>
              <h4 className="update-user-title">{role}</h4>
              <Checkbox.Group
                options={handleCheckBoxOptions(role)}
                defaultValue={handleInitalChecbox(role, formData?.permissions)}
                onChange={(checkedValues) => {
                  handlePermissionChange(role, checkedValues);
                }}
              />
            </Col>
          ))}
        </Row>
      </Form>
    </Modal>
  );
};

export default UserCreateAndEditModal;
