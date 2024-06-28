import React, { useRef } from "react";
import { qrcodeLogo, userDefaultIcon, passwordIcon } from "../../assets/images";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { loggedInUser } from "../../store/actions/user";
import { Navigate, useNavigate } from "react-router-dom";
import { PATH_LIST } from "../../components/common/pathList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../components/footer";
import "./style.scss";
import jwtDecode from "jwt-decode";

const Login = () => {
  //For dispatch actions
  const dispatch = useDispatch();
  //For form
  const [form] = Form.useForm();
  //For navigate
  const navigate = useNavigate();

  //for redirect dashboard after access token already exist
  const Token = localStorage.getItem("access_token");
  if (Token) {
    return <Navigate to={PATH_LIST.admin.dashboard} />;
  }

  //for user login successfull
  const onFinish = (values) => {
    dispatch(loggedInUser(values)).then((res) => {
      if (res?.payload?.error === "failed") {
        toast.error(res?.payload?.message);
      } else {
        localStorage.setItem("access_token", res?.payload);
        // navigate(PATH_LIST.admin.dashboard);
        const { userDataWithoutPassword } = jwtDecode(res?.payload);
        if (userDataWithoutPassword?.scope === "Super_Admin") {
          navigate(PATH_LIST.admin.dashboard);
        } else {
          navigate(`/${userDataWithoutPassword?.permissions[0]?.role}`);
        }
        form.resetFields();
      }
    });
  };

  return (
    <div className="qr-login-mainpage">
      <div className="container">
        <div className="qr-login-main">
          <div className="qr-login-top-sec">
            <div className="qr-logo">
              <span>{qrcodeLogo}</span>
            </div>
            <div className="qr-contact-sec">
              <button className="btn qr-withoutbg">Contact Us</button>
              <button className="btn qr-withbg">Help</button>
            </div>
          </div>
          <div className="qr-login-sec">
            <div className="qr-login-left">
              <div className="qr-left-content">
                <h3>
                  Don’t let the fear of losing be greater than the excitement of
                  winning.
                </h3>
                <span className="qr-sub-content">- Robert Kiyosaki</span>
              </div>
            </div>
            <div className="qr-login-right">
              <div className="qr-right-content">
                <h3>Login/Authenticate to Portal</h3>
                <span className="qr-sub-content qr-right-desc">
                  Use your User ID and Passcode to Access Product Shipping
                </span>
                <Form
                  form={form}
                  name="basic"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  autoComplete="off"
                  style={{
                    maxWidth: 400,
                  }}
                >
                  <Form.Item
                    label="Email address"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                      { type: "email", message: "Please enter a valid email!" },
                    ]}
                  >
                    <Input
                      prefix={userDefaultIcon}
                      placeholder="name@example.com"
                    />
                  </Form.Item>

                  <Form.Item
                    label="Passcode"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password
                      prefix={passwordIcon}
                      placeholder="Enter Unique passcode"
                    />
                  </Form.Item>

                  <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Button type="primary" htmlType="submit">
                      Continue
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
          <Footer />
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Login;
