import React, { Component } from "react";

class SearchForm extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <h5>Book Search</h5>
        </div>
        <form>
          <div className="form-group">
            <label for="searchInput">Book</label>
            <input type="book" className="form-control" id="searchInput" />
          </div>
          <button type="submit" className="btn btn-secondary">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
