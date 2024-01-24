import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Hero } from "../../components/Hero/Hero";
import { Cards } from "../../components/Cards/Cards";
import { Info } from "../../components/Info/Info";
import { Subscriptions } from "../../components/Subscriptions/Subscriptions";
import { Footer } from "../../components/Footer/Footer";

import "./LandingPage.css";

export const LandingPage = () => {
  return (
    <div className="bg-black">
      <div className="hero-section-wrapper background-image">
        <Navbar />
        <Hero />
      </div>

      <div className="features-cards-wrapper">
        <Cards />
      </div>

      <div className="additional-info-wrapper">
        <Info />
      </div>

      <div className="subscriptions-wrapper">
        <Subscriptions />
      </div>

      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
};
