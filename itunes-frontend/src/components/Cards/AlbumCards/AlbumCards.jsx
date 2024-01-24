import React, { useContext } from "react";
import { FavoritesContext } from "../../../App";

export const AlbumCards = ({ albums }) => {
  const { favorite, setFavorite } = useContext(FavoritesContext);

  const addToFavorites = (selectedAlbum) => {
    // Check if the selected album is already in favorites
    const isAlbumInFavorites = favorite.includes(
      (favAlbum) => favAlbum.id === selectedAlbum.id
    );

    // If the album is not in favorites, add it
    if (!isAlbumInFavorites) {
      setFavorite((prevFavorites) => [...prevFavorites, selectedAlbum]);
      console.log(favorite);
    }
    alert("added to favorites!");
  };

  return (
    <div className="d-flex flex-wrap">
      {albums.map((album) => (
        <div
          className="card m-3"
          style={{ width: "10rem" }}
          key={album.id}
          alt="Artist"
        >
          <img src={album.artworkUrl100} className="card-img-top" alt=".." />
          <div className="card-body">
            <h5 className="card-title">{album.collectionName}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {album.artistName}
            </h6>
            <a
              href={album.collectionViewUrl}
              className="card-link text-black"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Details
            </a>
            <button
              style={{ width: "8em", height: "4em" }}
              onClick={() => addToFavorites(album)}
              className="btn btn-primary mt-2"
            >
              Add to Favorites
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
