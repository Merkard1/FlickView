import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function search() {
  const navigate = useNavigate();
  const location = useLocation();

  const [type, setType] = useState("movie");
  const [searchTerm, setSearchTerm] = useState("");

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchUrl = `/search/${type}/${searchTerm}`;
    navigate(searchUrl);
  };

  return (
    <section className="search">
      <div className="container">
        <div id="alert"></div>
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="search-radio">
            <input
              type="radio"
              id="movie"
              name="type"
              value="movie"
              checked={type === "movie"}
              onChange={handleTypeChange}
            />
            <label htmlFor="movie"> Movies</label>
            <input
              type="radio"
              id="tv"
              name="type"
              value="tv"
              checked={type === "tv"}
              onChange={handleTypeChange}
            />
            <label htmlFor="tv"> TV Shows</label>
          </div>
          <div className="search-flex">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Enter search term"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn" type="submit">
              <IoSearchOutline />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default search;
