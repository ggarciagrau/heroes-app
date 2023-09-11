import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../../hooks/useForm";
import { HeroeCard } from "../components";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const { searchText, onInputChange } = useForm({
    searchText: "",
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();

    const searchValue = searchText.trim();

    if (searchValue.length <= 1) return;

    navigate(`?q=${searchValue}`);
  };

  return (
    <>
      <h1>Search</h1>

      <div className="row">
        <div className="col-5">
          Searching
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              name="searchText"
              autoComplete="off"
              placeholder="Search a hero"
              className="form-control"
              value={searchText}
              onChange={onInputChange}
            />

            <button type="submit" className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <div className="alert alert-primary">Search a hero</div>
          <div className="alert alert-danger">
            There isn't results with <b>{q}</b>
          </div>
          <HeroeCard />
        </div>
      </div>
    </>
  );
};
