import React, { useEffect, useState } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import { Header } from "../../components/header";
import { PATH_LIST } from "../../components/common/pathList";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedInUser } from "../../store/slices/authSlice";
import jwtDecode from "jwt-decode";
import "./style.scss";
import { hamburger, qrcodeLogo } from "../../assets/images";
import { getUserDetails } from "../../store/actions/user";

// import "./style.scss";

const Layout = ({ permissions }) => {
  // for reducer

  const { loggedInUser } = useSelector((state) => state.auth);
  //For get token
  const Token = localStorage.getItem("access_token");

  // For toggle side bar
  const [toggleSideBar, setToggleSideBar] = useState(false);

  // For dispatch actions
  const dispatch = useDispatch();

  //For get login user
  useEffect(() => {
    if (Token) {
      // const decodedToken = jwtDecode(Token);

      dispatch(getUserDetails({ Token }));
    }
  }, []);

  return (
    <div className="main-wrapper">
      {Token ? (
        <>
          {Object?.keys(loggedInUser).length === 0 ? (
            <h1>Loading...</h1>
          ) : (
            <>
              <Sidebar
                toggleSideBar={toggleSideBar}
                setToggleSideBar={setToggleSideBar}
                permissions={loggedInUser?.permissions}
                userRole={loggedInUser?.scope}
              />

              <div className="dashboard_main">
                <div className="product_header_mobile_view">
                  <div className="mv_wrap_sec">
                  <div
                      className="mv_tooglebar"
                      onClick={() => setToggleSideBar(!toggleSideBar)}
                    >
                      {hamburger}
                    </div>
                    <div className="mv_logo">{qrcodeLogo}</div>
                    
                  </div>
                </div>

                <div className="product_header">
                  <Header permissions={permissions} />
                </div>
                <div className="">
                  <Outlet />
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <Navigate to={PATH_LIST.admin.login} />
      )}
    </div>
  );
};

export default Layout;
