import React from "react";

function SearchForm({ handleInputChange, q, handleFormSubmit }) {
  return (
    <div className="container">
      <div>
        <h5>Book Search</h5>
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="searchInput">Book</label>
          <input
            type="text"
            className="form-control"
            id="searchInput"
            value={q}
            name="q"
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-secondary"
          onClick={handleFormSubmit}
        >
          Search
        </button>
      </form>
    </div>
  );
}
export default SearchForm;
