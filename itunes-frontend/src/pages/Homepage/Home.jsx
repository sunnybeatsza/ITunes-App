import React from "react";
import "./Home.css";
import { Sidemenu } from "../../components/Sidemenu/Sidemenu";
import { MainPage } from "../../components/MainPage/MainPage";

export const Home = () => {
  return (
    <div className="Home-container">
      <Sidemenu />
      <MainPage />
    </div>
  );
};
