import React from "react";
import { useState } from "react";

export const SearchLayout = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8080/search?term=${searchTerm}`
      );
      const results = await response.json();
      setSearchResults(results);
      console.log(results);
    } catch (error) {
      console.error("Error fetching data from backend:", error.message);
      // Handle error appropriately, e.g., display an error message to the user
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <label htmlFor="searchTerm">Search Term:</label>
        <input
          type="text"
          id="searchTerm"
          name="term"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>
      <div className="jumbotron-container">Search page</div>
      <div className="d-flex justify-content-center">
        <div className="jumbotron-small">Smaller content</div>
        <div className="jumbotron-small">Smaller content</div>
        <div className="jumbotron-small">Smaller content</div>
        <div className="jumbotron-small">Smaller content</div>
      </div>
    </div>
  );
};
