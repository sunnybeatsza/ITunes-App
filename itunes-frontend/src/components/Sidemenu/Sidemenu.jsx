import React from "react";
import logoImage from "../../pages/Homepage/Assets/anastasia-zhenina-3c9Ltv9kf_s-unsplash.jpg";
import "./Sidemenu.css";
import { Link } from "react-router-dom";

export const Sidemenu = () => {
  return (
    <div className="sidebar bg-black">
      <div className="logo">
        <a href="">
          <i class="bi bi-spotify fs-1 my-5">
            <span className="mx-2">Muso</span>
          </i>
        </a>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <a href="#">
              <i class="bi bi-house-door">
                <span className="mx-2">
                  <Link to="/Home">Home</Link>
                </span>
              </i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bi bi-search">
                <span className="mx-2">
                  <Link to="/Search">Search</Link>
                </span>
              </i>
            </a>
          </li>

          <li>
            <a href="#">
              <i class="bi bi-music-note-beamed">
                <span className="mx-2">Library</span>
              </i>
            </a>
          </li>
        </ul>
      </div>

      <div className="navigation-2">
        <ul>
          <li>
            <a href="#">
              <i class="bi bi-plus-square">
                <span className="mx-2">Create a playlist</span>
              </i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bi bi-suit-heart-fill">
                <span className="mx-2">
                  <Link to="/Favorites">Favorites</Link>
                </span>
              </i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
