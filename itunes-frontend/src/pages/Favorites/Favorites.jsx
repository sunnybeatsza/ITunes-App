import React, { useContext } from "react";
import { FavoritesContext } from "../../App";
import { Sidemenu } from "../../components/Sidemenu/Sidemenu";

export const Favorites = () => {
  const { favorite } = useContext(FavoritesContext);

  return (
    <div className="d-flex">
      <Sidemenu />
      <div className="favorites-container ">
        <h2>Your Favorites</h2>
        <div className="jumbotron-container d-flex justify-content-center">
          {favorite.map((favAlbum) => (
            <div
              key={favAlbum.id}
              className="card m-3"
              style={{ width: "10rem" }}
            >
              <img
                src={favAlbum.artworkUrl100}
                className="card-img-top"
                alt="Album"
              />
              <div className="card-body">
                <h5 className="card-title">{favAlbum.collectionName}</h5>
                <p className="card-text">{favAlbum.artistName}</p>
                <a
                  href={favAlbum.collectionViewUrl}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
