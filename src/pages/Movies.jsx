import React, { useEffect, useState } from "react";
import { NowPlaying, PopularMovie, SearchForm } from "../components";
import { fetchAPIData } from "../hooks/fetchAPIData";
import { useNavigate } from "react-router-dom";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const { results } = await fetchAPIData("movie/popular");

        setMovies(results);
        setLoaded(true);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPopularMovies();
  }, []);

  return (
    <div>
      <NowPlaying />
      <SearchForm />
      <section className="container">
        <h2>Popular Movies</h2>
        <div id="popular-movies" className="grid">
          {!loaded
            ? ""
            : movies.map((movie) => (
                <PopularMovie
                  key={movie.id}
                  movie={movie}
                  onClick={() => navigate(`/${movie.id}`)}
                />
              ))}
        </div>
      </section>
    </div>
  );
}

export default Movies;
