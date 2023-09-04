import { useNavigate, useLocation } from "react-router-dom";

const Album = ({ title, id }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state.userId;

  const moveToPhotos = (id) => {
    navigate(`/${userId}/album/${id}/photos`, { state: { albumId: id } });
  };

  return (
    <div className="albumsBox__album">
      <h2 className="title_album">{title}</h2>
      <button onClick={() => moveToPhotos(id)} className="albumBtn">
        Photos
      </button>
    </div>
  );
};

export default Album;
