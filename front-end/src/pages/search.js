import React, { Component } from "react";
import SearchForm from "../components/SearchForm/index";
import { List } from "../components/List/index";

export default function Search() {
  return (
    <div>
      <SearchForm />
      <div className="container" style={{ marginTop: "2em" }}>
        <h5>Results</h5>
        <List></List>
      </div>
    </div>
  );
}
