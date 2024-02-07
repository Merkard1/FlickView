import React, { useEffect, useState } from "react";
import { fetchAPIData } from "../hooks/fetchAPIData";
import { PopularTvShow } from "../components";
import { useNavigate } from "react-router-dom";

function Shows() {
  const [shows, setShows] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const { results } = await fetchAPIData("tv/popular");
        setShows(results);
        setLoaded(true);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPopularMovies();
    console.log(shows);
  }, []);

  return (
    <section className="container">
      <h2>Popular TV Shows</h2>
      <div id="popular-shows" className="grid">
        {!loaded
          ? ""
          : shows.map((show) => (
              <PopularTvShow
                show={show}
                key={show.id}
                onClick={() => navigate(`/${show.id}`)}
              />
            ))}
      </div>
    </section>
  );
}

export default Shows;
