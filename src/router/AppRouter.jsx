import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ChildMoviesRoutes, MoviesRoutes } from "../movies";
import { LoginPage } from "../auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const router = createBrowserRouter([
  {
    path: "/login",
    element: 
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
  },
  {
    path: "/",
    element: 
      <PrivateRoute>
        <MoviesRoutes />
      </PrivateRoute>
    ,
    children: ChildMoviesRoutes,
  }
]);

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
