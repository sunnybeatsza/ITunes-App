import React from "react";
import { useState } from "react";
import { artistCards } from "../Cards/artistCards";

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

  const handleArtistSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8080/search/artist?term=${searchTerm}`
      );
      const results = await response.json();
      setSearchResults(results);
      console.log(results);
    } catch (error) {
      console.error("Error fetching data from backend:", error.message);
      // Handle error appropriately, e.g., display an error message to the user
    }
  };

  const handleSongSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8080/search/songs?term=${searchTerm}`
      );
      const results = await response.json();
      setSearchResults(results);
      console.log(results);
    } catch (error) {
      console.error("Error fetching data from backend:", error.message);
      // Handle error appropriately, e.g., display an error message to the user
    }
  };

  const handleAlbumSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8080/search/album?term=${searchTerm}`
      );
      const results = await response.json();
      setSearchResults(results);
      console.log(results);
    } catch (error) {
      console.error("Error fetching data from backend:", error.message);
      // Handle error appropriately, e.g., display an error message to the user
    }
  };

  const handlePlaylistSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8080/search/mix?term=${searchTerm}`
      );
      const results = await response.json();
      setSearchResults(results);
      console.log(results);
    } catch (error) {
      console.error("Error fetching data from backend:", error.message);
      // Handle error appropriately, e.g., display an error message to the user
    }
  };

  const handlePodcastSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8080/search/podcasts?term=${searchTerm}`
      );
      const results = await response.json();
      setSearchResults(results);
      console.log(results);
    } catch (error) {
      console.error("Error fetching data from backend:", error.message);
      // Handle error appropriately, e.g., display an error message to the user
    }
  };

  const handleMusicVideoSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8080/search/musicVideos?term=${searchTerm}`
      );
      const results = await response.json();
      setSearchResults(results);
      console.log(results);
    } catch (error) {
      console.error("Error fetching data from backend:", error.message);
      // Handle error appropriately, e.g., display an error message to the user
    }
  };

  const handleMovieSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8080/search/movie?term=${searchTerm}`
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

      <button onClick={handleSearch}>All</button>
      <button onClick={handleArtistSearch}>Artists</button>
      <button onClick={handleSongSearch}>Songs</button>
      <button onClick={handleAlbumSearch}>Albums</button>
      <button onClick={handlePlaylistSearch}>Playlists</button>
      <button onClick={handlePodcastSearch}>Podcast and shows</button>
      <button onClick={handleMusicVideoSearch}>Music Videos</button>
      <button onClick={handleMovieSearch}>Films</button>

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
