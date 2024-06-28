import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setActiveSidebarValue } from "../../store/slices/toggleStates";

const Settings = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveSidebarValue({ name: "settings", heading: "Settings" }));
  }, []);
  return (
    <div>
      <h1>Coming Soon !</h1>
    </div>
  );
};
export default Settings;
