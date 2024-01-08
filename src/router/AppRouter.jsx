import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ChildMoviesRoutes, MoviesRoutes } from "../movies";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MoviesRoutes />,
    children: ChildMoviesRoutes,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
