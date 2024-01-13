import { Outlet } from "react-router-dom";
import NavaBar from "../../ui/components/NavaBar";

export const TVSeriesRoutes = () => {
  return (
    <>
      <NavaBar></NavaBar>
     
        <Outlet></Outlet>
    </>
  );
};
