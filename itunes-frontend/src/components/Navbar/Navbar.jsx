import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="d-flex justify-content-between">
      <div className="navbar-left">
        <h1 className="text-light mx-2 my-2">Muso</h1>
      </div>
      <div className="navbar-right">
        <ul className="list-inline">
          <li className="list-inline-item mx-2 my-2">
            <Link to="/Login">
              <button className="btn btn-primary">Login</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
