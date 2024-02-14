import React, { useEffect, useState } from "react";
import addCommasToNumber from "../shared/addCommasToNumber";
import { BackButton } from "../components";
import { fetchAPIData } from "../hooks/fetchAPIData";
import { FaRegStar } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

function Details({ type }) {
  const [entertainment, setEntertainment] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchEntertainment = async () => {
      try {
        const data = await fetchAPIData(`${type}/${id.substr(3)}`);
        setEntertainment(data);
        setLoaded(true);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEntertainment();
  }, []);

  const renderEntertainmentDetails = () => (
    <section className="container">
      <BackButton Text={`Back To ${type === "movie" ? "Movies" : "Shows"}`} />
      <h2>{entertainment.title || entertainment.name}</h2>
      {loaded && (
        <div id={`${type}-details`}>
          <div className="details-top">
            <div className="details">
              <img
                src={
                  entertainment.poster_path
                    ? `https://image.tmdb.org/t/p/w500${entertainment.poster_path}`
                    : "/src/images/no-image.png"
                }
                className="card-img-top"
                alt={entertainment.title || entertainment.name}
              />
            </div>
            <div>
              <p>
                <FaRegStar /> {entertainment.vote_average.toFixed(1)} / 10
              </p>
              <p className="text-muted">
                {type === "movie" ? "Release Date:" : "Last Air Date:"}{" "}
                {entertainment.release_date || entertainment.last_air_date}
              </p>
              <p>{entertainment.overview}</p>
              <h5>Genres:</h5>
              <ul className="list-group">
                {entertainment.genres.map((genre, index) => (
                  <li key={index}>{genre.name}</li>
                ))}
              </ul>
              <Link to={entertainment.homepage} target="_blank" className="btn">
                Visit {type === "movie" ? "Movie" : "Entertainment"} Homepage
              </Link>
            </div>
          </div>
          <div className="details-bottom">
            <h2>{type === "movie" ? "Movie" : "Entertainment"} Info</h2>
            <ul>
              {type === "movie" && (
                <>
                  <li>
                    <span className="text-secondary">Budget: </span> $
                    {addCommasToNumber(entertainment.budget)}
                  </li>
                  <li>
                    <span className="text-secondary">Revenue: </span> $
                    {addCommasToNumber(entertainment.revenue)}
                  </li>
                  <li>
                    <span className="text-secondary">Runtime: </span>
                    {entertainment.runtime} minutes
                  </li>
                </>
              )}
              <li>
                <span className="text-secondary">Status: </span>{" "}
                {entertainment.status}
              </li>
              {type === "show" && (
                <>
                  <li>
                    <span className="text-secondary">Number of Episodes: </span>
                    {entertainment.number_of_episodes}
                  </li>
                  <li>
                    <span className="text-secondary">
                      Last Episode To Air:{" "}
                    </span>
                    {entertainment.last_episode_to_air.name}
                  </li>
                </>
              )}
            </ul>
            <h4>Production Companies</h4>
            <div className="list-group">
              {entertainment.production_companies.map((company, index) => (
                <span key={index}>{company.name}; </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );

  return renderEntertainmentDetails();
}

export default Details;
