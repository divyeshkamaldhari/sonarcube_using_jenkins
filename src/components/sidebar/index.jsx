import React, { useEffect, useState } from "react";
import {
  qrcodeLogo,
  toggleRightArrow,
  toggleLeftArrow,
  qrcodeSubLogo,
  logOutIcon,
  closeIcon,
} from "../../assets/images";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setActiveSidebarValue } from "../../store/slices/toggleStates";
import { subMenus } from "../common/subMenus";
import { PATH_LIST } from "../common/pathList";
import "./style.scss";

const Sidebar = ({
  toggleSideBar,
  setToggleSideBar,
  permissions,
  userRole,
}) => {
  //For reducer
  const { loggedInUser } = useSelector((state) => state.auth);
  const { sidebarValue } = useSelector((state) => state.toggleStates);
  //For navigate
  const navigate = useNavigate();

  //for retriction admin
  //for dispatch action call
  const dispatch = useDispatch();

  // for location
  const location = useLocation();
  //For toggleclass
  const [isToggleClass, setIsToggleClass] = useState(false);

  //For logOut
  const Logout = () => {
    localStorage.removeItem("access_token");
    navigate(PATH_LIST.admin.login);
  };

  const handleNavLink = (v) => {
    if (v.name === "Logout") {
      localStorage.removeItem("access_token");
      navigate(PATH_LIST.admin.login);
    } else {
      dispatch(
        setActiveSidebarValue({
          name: v?.id,
          heading: v?.heading,
        })
      );
    }
  };
  return (
    <div
      className={`sidebar ${toggleSideBar ? "show_sidebar" : "hide_sidebar"} ${
        isToggleClass ? "expand_right" : "ex00pand_left"
      }`}
    >
      <div className="side_wrapper">
        <div className="side_header">
          <div className="side_logo">
            {!isToggleClass ? qrcodeLogo : qrcodeSubLogo}
            <span
              className="side_bar_icon"
              onClick={() => setIsToggleClass(!isToggleClass)}
            >
              {isToggleClass ? toggleRightArrow : toggleLeftArrow}
            </span> 
            
          </div>
           <span className="side_close_icon"
              onClick={() => setToggleSideBar(false)}> {closeIcon}             
              </span>
        </div>
        <div className="side_body">
          <div className="sidebar_nav">
            <ul className="nav">
              {subMenus?.map((v, i) => {
                const hasPrmissions = permissions?.some(
                  (role) => role?.role === v?.id
                );
                if (
                  (v.id && hasPrmissions) ||
                  userRole === "Super_Admin" ||
                  v.id === "logout" ||
                  v.id === "settings"
                ) {
                  return (
                    <li
                      key={i}
                      onClick={() => handleNavLink(v)}
                      className={`sidebar_tab ${
                        sidebarValue?.name === v?.id ? "Active" : ""
                      }`}
                    >
                      <NavLink to={v.path} className="ap-nav-link">
                        <span className="icon">{v.icon}</span>
                        <span className="name">{v.name}</span>
                      </NavLink>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
