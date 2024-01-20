import React from "react";
import "./Jumbotron.css";

export const Jumbotron = () => {
  return (
    <div>
      <div className="jumbotron-container"> Main content</div>
      <div className="d-flex justify-content-center">
        <div className="jumbotron-small">Smaller content</div>
        <div className="jumbotron-small">Smaller content</div>
        <div className="jumbotron-small">Smaller content</div>
        <div className="jumbotron-small">Smaller content</div>
      </div>

      <div className="jumbotron-container"> Main content</div>
      <div className="d-flex justify-content-center">
        <div className="jumbotron-small">Smaller content</div>
        <div className="jumbotron-small">Smaller content</div>
        <div className="jumbotron-small">Smaller content</div>
        <div className="jumbotron-small">Smaller content</div>
      </div>
    </div>
  );
};
