import React from "react";
import { Link } from "react-router-dom";

function PopularTvShow({ show }) {
  return (
    <div className="card">
      <Link to={`/tv-details/id=${show.id}`} id={show.id}>
        {show.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
            className="card-img-top"
            alt={show.name}
          />
        ) : (
          <img
            src="../images/no-image.jpg"
            className="card-img-top"
            alt={show.name}
          />
        )}
      </Link>
      <div className="card-body">
        <h5 className="card-title">{show.name}</h5>
        <p className="card-text">
          <small className="text-muted">Air Date: {show.first_air_date}</small>
        </p>
      </div>
    </div>
  );
}

export default PopularTvShow;
