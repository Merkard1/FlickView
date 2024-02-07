import React from "react";
import { Link, useNavigate } from "react-router-dom";

function PopularMovie({ movie }) {
  return (
    <div className="card">
      <Link to={`/movie-details/id=${movie.id}`} id={movie.id}>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className="card-img-top"
            alt={movie.title}
          />
        ) : (
          <img
            src="../images/no-image.jpg"
            className="card-img-top"
            alt={movie.title}
          />
        )}
      </Link>
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">
          <small className="text-muted">Release: {movie.release_date}</small>
        </p>
      </div>
    </div>
  );
}

export default PopularMovie;
