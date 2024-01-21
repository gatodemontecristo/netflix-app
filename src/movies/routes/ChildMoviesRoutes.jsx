import { Navigate } from "react-router-dom";
import { MovieInfoCard, MoviesGallery, TVSeriesGallery, TVSeriesInfoCard } from "../pages";

export const ChildMoviesRoutes = [
  { path: "movies", element: <MoviesGallery /> },
  { path: "series", element: <TVSeriesGallery /> },
  { path: "movie-info/:movieId", element: <MovieInfoCard/>},
  { path: "tvserie-info/:serieId", element: <TVSeriesInfoCard/>},
  { path: "/*", element: <Navigate to="/movies" /> },
  { path: "/", element: <Navigate to="/movies" /> },
];
