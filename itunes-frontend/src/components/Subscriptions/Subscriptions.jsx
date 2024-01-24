import React from "react";
import "./Subscriptions.css";

export const Subscriptions = () => {
  return (
    <div className="my-5 bg-black">
      <div className="cards__inner card-container">
        <div className="cards__card card-sub">
          <p className="card__heading">Basic Plan</p>
          <p className="card__price">R150.00/month</p>
          <ul className="card_bullets flow" role="list">
            <li>Access to most features</li>
            <li>Limted storage</li>
            <li>Ads</li>
          </ul>
          <a className="card__cta cta" href="#basic">
            Get Started
          </a>
        </div>
        <div className="overlay cards__inner" />
      </div>

      <div className="cards__inner card-container">
        <div className="cards__card card-sub">
          <p className="card__heading">Premium Plan</p>
          <p className="card__price">R250.00/month</p>
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
