import React from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold text-light">Welcome to Muso.com </h1>
      <div className="col-lg-6 mx-auto">
        <p className="text-light">
          "where the rhythm meets the web! Immerse yourself in a world of
          seamless musical discovery and expression. Let the music begin, and
          let your story unfold."
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Link to="/Login">
            <button className="btn btn-primary">Get started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
