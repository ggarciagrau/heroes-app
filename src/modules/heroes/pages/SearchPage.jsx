import { HeroeCard } from "../components";

export const SearchPage = () => {
  return (
    <>
      <h1>Search</h1>

      <div className="row">
        <div className="col-5">
          Searching
          <hr />
          <form>
            <input
              type="text"
              name="search-text"
              autoComplete="off"
              placeholder="Search a hero"
              className="form-control"
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
          <div className="alert alert-danger">There isn't results with <b>ABC</b></div>
          <HeroeCard />
        </div>
      </div>
    </>
  );
};
