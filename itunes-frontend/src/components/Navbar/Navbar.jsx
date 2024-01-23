import React from "react";

export const Navbar = () => {
  return (
    <div className="d-flex justify-content-between">
      <div className="navbar-left">
        <h1 className="text-light mx-2 my-2">Muso</h1>
      </div>
      <div className="navbar-right">
        <ul className="list-inline">
          <li className="list-inline-item mx-2 my-2">
            <button className="btn btn-light">About</button>
          </li>
          <li className="list-inline-item mx-2 my-2">
            <button className="btn btn-light">Support</button>
          </li>
          <li className="list-inline-item mx-2 my-2">
            <button className="btn btn-light">Login</button>
          </li>
          <li className="list-inline-item mx-2 my-2">
            <button className="btn btn-light">Start Free trial</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
