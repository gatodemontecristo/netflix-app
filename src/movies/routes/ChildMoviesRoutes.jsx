import { Navigate } from "react-router-dom";
import { MovieInfoCard, MoviesGallery, TVSeriesGallery } from "../pages";

export const ChildMoviesRoutes = [
  { path: "movies", element: <MoviesGallery /> },
  { path: "series", element: <TVSeriesGallery /> },
  { path: "movie-info/:movieId", element: <MovieInfoCard/>},
  { path: "/*", element: <Navigate to="/movies" /> },
  { path: "/", element: <Navigate to="/movies" /> },
];
