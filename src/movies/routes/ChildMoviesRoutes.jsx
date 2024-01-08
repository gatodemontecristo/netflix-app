import { Navigate } from "react-router-dom";
import { MoviesGallery } from "../pages/MoviesGallery";

export const ChildMoviesRoutes = [
  { path: "movies", element: <MoviesGallery /> },
  { path: "/*", element: <Navigate to="/movies" /> },
  { path: "/", element: <Navigate to="/movies" /> },
];
