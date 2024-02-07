import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { searchAPIData } from "../hooks/searchAPIData";

function Search() {
  const { type, id } = useParams();

  const [results, setResults] = useState([]);
  const [page, setPage] = useState(() => {
    const storedPage = sessionStorage.getItem("currentPage");
    return storedPage ? parseInt(storedPage) : 1;
  });
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const { results, total_pages, total_results, term } = await searchAPIData(
        page,
        type,
        id
      );
      setResults(results);
      setTotalPages(total_pages);
      setTotalResults(total_results);
      setTerm(term);
    };

    fetchData();
  }, [page, type, id]);

  useEffect(() => {
    sessionStorage.setItem("currentPage", page);
  }, [page]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  return (
    <div className="container" id="search-results-wrapper">
      <div id="search-results-heading">
        <h2>
          {results.length} of {totalResults} Results for {term}
        </h2>
      </div>
      <div id="search-results" className="grid">
        {results.map((result) => (
          <div key={result.id} className="card">
            <Link to={`/${type}-details/id=${result.id}`}>
              <img
                src={
                  result.poster_path
                    ? `https://image.tmdb.org/t/p/w500${result.poster_path}`
                    : `/src/images/no-image.png`
                }
                className="card-img-top"
                alt={type === "movie" ? result.title : result.name}
              />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                {type === "movie" ? result.title : result.name}
              </h5>
              <p className="card-text">
                <small className="text-muted">
                  Release:{" "}
                  {type === "movie"
                    ? result.release_date
                    : result.first_air_date}
                </small>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div id="pagination" className="pagination">
        <button
          className="btn btn-primary"
          onClick={handlePrevPage}
          disabled={page === 1}
        >
          Prev
        </button>
        <button
          className="btn btn-primary"
          onClick={handleNextPage}
          disabled={page === totalPages}
        >
          Next
        </button>
        <div className="page-counter">
          Page {page} of {totalPages}
        </div>
      </div>
    </div>
  );
}

export default Search;
