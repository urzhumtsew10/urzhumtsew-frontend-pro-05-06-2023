import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Album from "./Album";

const AlbumsList = () => {
  const [albumsList, setAlbumsList] = useState([]);

  const location = useLocation();
  const userId = location.state.userId;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((albums) => {
        const filteredAlbums = albums.filter(
          (album) => +album.userId === +userId
        );
        setAlbumsList(filteredAlbums);
      });
  }, []);

  return (
    <div className="app">
      <div className="albumsBox">
        {albumsList.map((album) => (
          <Album key={album.id} id={album.id} title={album.title} />
        ))}
      </div>
    </div>
  );
};

export default AlbumsList;
