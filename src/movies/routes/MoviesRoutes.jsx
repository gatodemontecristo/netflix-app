import { Outlet } from "react-router-dom";
import NavaBar from "../../ui/components/NavaBar";

export const MoviesRoutes = () => {
  return (
    <>
      <NavaBar></NavaBar>
      <div className="container">
        <Outlet></Outlet>
      </div>
    </>
  );
};
