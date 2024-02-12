import React, { useEffect, useState } from "react";
import { fetchAPIData } from "../hooks/fetchAPIData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import useMedia from "../hooks/useMedia";

function NowPlaying() {
  const [movie, setMovie] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const isAboveMediumScreens = useMedia("(max-width: 768px)");

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const { results } = await fetchAPIData("movie/popular");

        setMovie(results);
        setLoaded(true);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPopularMovies();
  }, []);

  return (
    <section className="now-playing">
      <h2>Now Playing</h2>
      <div className="swiper">
        <Swiper
          className="swiper"
          spaceBetween={40}
          slidesPerView={isAboveMediumScreens ? 1 : 4}
        >
          {movie.map((movie) => (
            <SwiperSlide key={movie.id} className="swiper-wrapper">
              <Link to={`/movie-details/id=${movie.id}`} id={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
              <h4 className="swiper-rating">
                <i className="fas fa-star text-secondary"></i>{" "}
                {movie.vote_average.toFixed(1)} / 10
              </h4>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default NowPlaying;
