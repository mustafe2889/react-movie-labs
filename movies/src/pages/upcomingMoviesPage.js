import React, { useEffect, useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";

const UpcomingMoviesPage = (props) => {
  //   const toDo = () => true;
  //   // Get movies from local storage.
  //   const movies = JSON.parse(localStorage.getItem("favorites"));
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      setUpcomingMovies(movies);
    });
  }, []);

  return <PageTemplate title="Upcoming Movies" movies={upcomingMovies} />;
};

export default UpcomingMoviesPage;