import React from "react";
import { useState, useEffect } from "react";
import { Loader } from "../Loader/Loader";

import { AlbumCards } from "../Cards/AlbumCards/AlbumCards";

export const SearchLayout = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8080/search?term=${searchTerm}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const results = await response.json();
        setSearchResults(results);
        console.log(results);
        console.log("token verified!", `${token}`);
      } else {
        console.error("Error fetching data from backend:", response.status);
      }
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
      <button onClick={handleArtistSearch} className="btn btn-primary m-2">
        Artists
      </button>
      <button onClick={handleSongSearch} className="btn btn-primary m-2">
        Songs
      </button>
      <button onClick={handleAlbumSearch} className="btn btn-primary m-2">
        Albums
      </button>
      <button onClick={handlePodcastSearch} className="btn btn-primary m-2">
        Podcast and shows
      </button>
      <button onClick={handleMusicVideoSearch} className="btn btn-primary m-2">
        Music Videos
      </button>
      <button onClick={handleMovieSearch} className="btn btn-primary m-2">
        Films
      </button>

      <div className="jumbotron-container d-flex justify-content-center">
        <AlbumCards albums={searchResults} />
      </div>
      <div className="d-flex justify-content-center">
        <div className="jumbotron-small"></div>
        <div className="jumbotron-small"></div>
        <div className="jumbotron-small"></div>
        <div className="jumbotron-small"></div>
      </div>
    </div>
  );
};
