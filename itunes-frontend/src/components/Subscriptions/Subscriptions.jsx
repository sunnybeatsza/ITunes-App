import React from "react";
import "./Subscriptions.css";

export const Subscriptions = () => {
  return (
    <div>
      <div className="cards__inner card-container">
        <div className="cards__card card">
          <p className="card__heading">Free Plan</p>
          <p className="card__price">$0/month</p>
          <ul className="card_bullets flow" role="list">
            <li>Access to all features</li>
            <li>Unlimited storage</li>
            <li>No ads</li>
          </ul>
          <a className="card__cta cta" href="#basic">
            Get Started
          </a>
        </div>
        <div className="overlay cards__inner" />
      </div>

      <div className="cards__inner card-container">
        <div className="cards__card card">
          <p className="card__heading">Free Plan</p>
          <p className="card__price">$0/month</p>
          <ul className="card_bullets flow" role="list">
            <li>Access to all features</li>
            <li>Unlimited storage</li>
            <li>No ads</li>
          </ul>
          <a className="card__cta cta" href="#basic">
            Get Started
          </a>
        </div>
        <div className="overlay cards__inner" />
      </div>
    </div>
  );
};
