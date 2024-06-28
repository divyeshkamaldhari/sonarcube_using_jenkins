import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { setActiveSidebarValue } from "../../store/slices/toggleStates";

const Dashboard = ({ permissions, scope }) => {
  const dispatch = useDispatch();
  if (!permissions?.some((v) => v?.role === "dashboard") && scope === "Admin") {
    return <Navigate to={`/${permissions[0]?.role}`} />;
  }
  useEffect(() => {
    dispatch(
      setActiveSidebarValue({ name: "dashboard", heading: "Dashboard" })
    );
  }, []);
  return (
    <div>
      <h1>Coming Soon !</h1>
    </div>
  );
};
export default Dashboard;
