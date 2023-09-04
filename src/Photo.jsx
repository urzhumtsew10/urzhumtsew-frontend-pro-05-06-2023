const Photo = ({ title, url }) => {
  return (
    <div className="photosBox__photo">
      <h2 className="photo_title">{title}</h2>
      <img className="photo_img" src={url} />
    </div>
  );
};

export default Photo;
