import React from "react";
import "./MainPage.css";
import { Jumbotron } from "../Jumbotron/Jumbotron";

export const MainPage = () => {
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
        <input type="text" />
        <Jumbotron />
      </div>
    </div>
  );
};
