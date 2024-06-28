import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { notificationIcon, userHeaderIcon } from "../../assets/images";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { subMenus } from "../common/subMenus";
import { setActiveSidebarValue } from "../../store/slices/toggleStates";
import "./style.scss";
import { Button } from "antd";

export const Header = ({ Permissions }) => {
  //for get reducer value
  const { sidebarValue } = useSelector((state) => state.toggleStates);

  const { loggedInUser } = useSelector((state) => state.auth);
  //for dispatch action call
  const dispatch = useDispatch();
  //for get locaton path
  const location = useLocation();
  const [isToggleSearch, setIsToggleSearch] = useState(false);
  const navigate = useNavigate();

  //set header heading value
  useEffect(() => {
    const currentVal = subMenus?.find((v) => location?.pathname === v?.path);

    if (Permissions?.find((v) => v?.role === currentVal?.id)) {
      dispatch(
        setActiveSidebarValue({
          name: currentVal?.id,
          heading: currentVal?.heading,
        })
      );
    }
  }, [location]);

  return (
    <div className="qr_product_top">
      <div className="qr_top_left header_title">
        <h1>
          {sidebarValue.heading === "Product View" ? (
            <Button onClick={() => navigate("/products")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M10.7066 1.63556C10.894 1.82309 10.9993 2.0774 10.9993 2.34256C10.9993 2.60772 10.894 2.86203 10.7066 3.04956L5.75656 7.99956L10.7066 12.9496C10.8887 13.1382 10.9895 13.3908 10.9872 13.653C10.985 13.9152 10.8798 14.166 10.6944 14.3514C10.509 14.5368 10.2582 14.642 9.99596 14.6442C9.73376 14.6465 9.48116 14.5457 9.29256 14.3636L3.63556 8.70656C3.44809 8.51903 3.34277 8.26472 3.34277 7.99956C3.34277 7.7344 3.44809 7.48009 3.63556 7.29256L9.29256 1.63556C9.48009 1.44809 9.7344 1.34277 9.99956 1.34277C10.2647 1.34277 10.519 1.44809 10.7066 1.63556Z"
                  fill="#C2C7CF"
                />
              </svg>{" "}
              Back to List{" "}
            </Button>
          ) : (
            sidebarValue.heading
          )}
        </h1>
      </div>
      <div className="qr_top_right">
        <div className="qr_serach" onClick={()=>setIsToggleSearch(!isToggleSearch)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g clipPath="url(#clip0_1290_340)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.6 11.2C12.637 11.228 12.673 11.259 12.707 11.293L15.707 14.293C15.8025 14.3853 15.8787 14.4956 15.9311 14.6176C15.9835 14.7396 16.0111 14.8708 16.0123 15.0036C16.0134 15.1364 15.9881 15.2681 15.9378 15.391C15.8875 15.5139 15.8133 15.6255 15.7194 15.7194C15.6255 15.8133 15.5139 15.8875 15.391 15.9378C15.2681 15.9881 15.1364 16.0134 15.0036 16.0123C14.8708 16.0111 14.7396 15.9835 14.6176 15.9311C14.4956 15.8787 14.3853 15.8025 14.293 15.707L11.293 12.707C11.2595 12.6736 11.2285 12.6378 11.2 12.6C9.78351 13.6624 8.01705 14.1485 6.25645 13.9604C4.49585 13.7723 2.87194 12.924 1.71183 11.5864C0.551715 10.2488 -0.0583901 8.52124 0.004408 6.75174C0.0672061 4.98223 0.798242 3.30227 2.05026 2.05026C3.30227 0.798242 4.98223 0.0672061 6.75174 0.004408C8.52124 -0.0583901 10.2488 0.551715 11.5864 1.71183C12.924 2.87194 13.7723 4.49585 13.9604 6.25645C14.1485 8.01705 13.6624 9.78351 12.6 11.2ZM7 12C8.32609 12 9.59786 11.4732 10.5355 10.5355C11.4732 9.59786 12 8.32609 12 7C12 5.67392 11.4732 4.40215 10.5355 3.46447C9.59786 2.52679 8.32609 2 7 2C5.67392 2 4.40215 2.52679 3.46447 3.46447C2.52679 4.40215 2 5.67392 2 7C2 8.32609 2.52679 9.59786 3.46447 10.5355C4.40215 11.4732 5.67392 12 7 12Z"
                fill="#A9B2B9"
              />
            </g>
            <defs>
              <clipPath id="clip0_1290_340">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <input type="text" placeholder="Search..." className={`serach-input ${isToggleSearch ? 'show_search':"hide_search"}`} />
        </div>
        <div className="qr_filter_icon">
          <span className="product_filter">{notificationIcon}</span>
          <span className="add_new_btn">{userHeaderIcon}</span>
        </div>
      </div>
    </div>
  );
};
