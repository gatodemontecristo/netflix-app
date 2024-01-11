import { Outlet } from "react-router-dom";
import NavaBar from "../../ui/components/NavaBar";

export const MoviesRoutes = () => {
  return (
    <>
      <NavaBar></NavaBar>
     
        <Outlet></Outlet>
    </>
  );
};
