import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ChildMoviesRoutes, MoviesRoutes } from "../movies";
import { LoginPage } from "../auth/pages/LoginPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MoviesRoutes />,
    children: ChildMoviesRoutes,
  },
  {
    path: "/login",
    element: <LoginPage />
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
