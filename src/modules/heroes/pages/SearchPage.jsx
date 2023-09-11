import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../../hooks/useForm";
import { HeroeCard } from "../components";
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();

    const searchValue = searchText.trim();

    // if (searchValue.length < 1) return;

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

          {!q.length && (
            <div className="alert alert-primary animate__animated animate__fadeIn">Search a hero</div>
          )}

          {!!heroes.length &&
            heroes.map((hero) => <HeroeCard key={hero.id} {...hero} />)}

          {!heroes.length && !!q.length && (
            <div className="alert alert-danger animate__animated animate__fadeIn">
              There isn't results with <b>{q}</b>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
