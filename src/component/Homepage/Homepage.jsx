import React, { useEffect, useState } from "react";
import "./Homepage.css";
import MovieSection from "../shared/MovieSection";
import Header from "../shared/Header";
import Hero from "../shared/Hero";

function Homepage() {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results); 
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setTvShows(data.results);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setPopularMovies(data.results);
      });
  }, []);


  return (
    <div>
      <Header />
      <Hero />

      <MovieSection
        title="Top Rated Movies"
        movies={movies}
      />

      <MovieSection
        title="TV Shows"
        movies={tvShows}
      />
    </div>
  );
}

export default Homepage;