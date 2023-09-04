import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Photo from "./Photo";

const Photos = () => {
  const location = useLocation();
  const albumId = location.state.albumId;

  const [photosList, setPhotosList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((photos) => {
        const filteredPhotos = photos.filter(
          (photo) => photo.albumId === albumId
        );
        setPhotosList(filteredPhotos);
      });
  }, []);

  return (
    <div className="app">
      <div className="blockPhoto">
        {photosList.map((photo) => (
          <Photo key={photo.id} title={photo.title} url={photo.url} />
        ))}
      </div>
    </div>
  );
};

export default Photos;
