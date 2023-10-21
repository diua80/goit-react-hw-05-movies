import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const SharedLayout = lazy(() => import("./SharedLayout"));
const Loader = lazy(() => import("./Loader"));
const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const MovieDetails = lazy(() => import("../pages/MovieDetails"));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));


export const App = () => {
 
  return (
    <div>
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
                      <Route index element={<Home />} />
        </Route>
          <Route path="movies" element={<Movies/>} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
                      <Route path="cast" element={<Cast />} />
                      <Route path="reviews" element={<Reviews />} />
            </Route>
      </Routes>
      </Suspense>
    </div>
  );
};