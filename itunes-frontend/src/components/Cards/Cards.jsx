import React from "react";
import "./Card.css";

export const Cards = () => {
  return (
    <div>
      <div className="d-flex justify-content-center cards-wrapper align-content-center flex-wrap">
        <div className="container my-5">
          <div className="box">
            <span className="title">Personalized Playlists</span>
            <div>
              <p>
                Tailor your music experience with smart playlists that adapt to
                your taste, ensuring the perfect soundtrack for every moment.
              </p>
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className="box">
            <span className="title">Discover Emerging Artists</span>
            <div>
              <p>
                Explore a world of undiscovered talent and be the first to
                uncover the sounds that could become the next big thing.
              </p>
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className="box">
            <span className="title">Seamless Social Sharing</span>
            <div>
              <p>
                Connect with friends, share favorite tracks, and collaborate on
                playlists effortlessly, making music a shared and social
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
