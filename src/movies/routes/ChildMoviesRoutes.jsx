import { Navigate } from "react-router-dom";
import { MoviesGallery } from "../pages/MoviesGallery";
import { TVSeriesGallery } from "../pages/TVSeriesGallery";

export const ChildMoviesRoutes = [
  { path: "movies", element: <MoviesGallery /> },
  { path: "series", element: <TVSeriesGallery /> },
  { path: "/*", element: <Navigate to="/movies" /> },
  { path: "/", element: <Navigate to="/movies" /> },
];
