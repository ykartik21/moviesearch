import React, { useState } from "react";
import "./Home.css";
import MovieCard from "./MovieCard";

const Home = () => {
  //states- input query, movies

  const [query, setQuery] = useState("");

  //create the state for movies, and update that state appropriate

  const [movies, setMovies] = useState([]);

  //function for API call

  async function searchMovie(e) {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=284bd823064894b6b6973e42d9a45f80&language=en-US&query=${query}&page=1&include_adult=false`;
    try {
      const res = await fetch(url);
      const data = await res.json();

      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  }

  //retuning function

  return (
    <div>
      <div className="navbar">
        <form className="form" onSubmit={searchMovie}>
          <label htmlFor="query" className="label">
            <h1> Welcome</h1>

            <h3>
              Millions of movies, TV shows and people to discover. Explore now.
            </h3>
          </label>
          <div>
            <input
              type="text"
              placeholder="Search a movie,tv show,person...."
              name="query"
              className="input"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />

            <button className="button" type="submit">
              Search...
            </button>
          </div>
        </form>
      </div>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard
              key={movie.id}
              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
              alt={movie.title + "poster"}
              title={movie.title}
              date={movie.release_date}
              ratings={movie.vote_average}
              desc={movie.overview}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
