import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setActiveSidebarValue } from "../../store/slices/toggleStates";

const Scan = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveSidebarValue({ name: "Scan", heading: "scan" }));
  }, []);
  return (
    <div>
      <h1>Coming Soon !</h1>
    </div>
  );
};
export default Scan;
