import React, { useState, useEffect } from "react";
import "./MainPage.css";
import { Jumbotron } from "../Jumbotron/Jumbotron";
import { AlbumCards } from "../Cards/AlbumCards/AlbumCards";
import { Loader } from "../Loader/Loader";

export const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setSearchTerm("Bryson Tiller");
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
          setLoading(false); // Set loading to false when data is fetched
          console.log("Data fetched:", results);
        } else {
          console.error("Error fetching data:", response.status);
          setLoading(false); // Set loading to false on error
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setLoading(false); // Set loading to false on error
      }
    };

    fetchData();
  }, [token, searchTerm]);

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  // Simulate a short timer (e.g., 1 second) before hiding the loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []);

  return (
    <div className="main-content">
      <header className="main-header">
        <nav className="nav-buttons">
          <ul className="mx-3 my-2">
            <li>Previous</li>
            <li>Next</li>
          </ul>
        </nav>

        <div className="nav-user">
          <ul className="mx-3 my-2">
            <li>Notifications</li>
            <li>User profile</li>
          </ul>
        </div>
      </header>
      <div className="main-body">
        <p>Welcome to the main page!</p>

        {loading ? (
          <Loader />
        ) : (
          <div className="album-cards-container">
            <AlbumCards albums={searchResults} />
          </div>
        )}
      </div>
    </div>
  );
};
