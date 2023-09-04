import { useNavigate } from "react-router-dom";

const User = ({ id, name, surname, email, city, phone, company }) => {
  const navigate = useNavigate();

  const movetoAlbum = (id) => {
    navigate(`${id}/album`, { state: { userId: id } });
  };

  return (
    <div className="usersBox__user">
      <h2 className="user__name">
        {name} {surname}
      </h2>
      <p className="user__email userInfo">
        email:<span className="userInfo__span">{email}</span>
      </p>
      <p className="user__city userInfo">
        city:<span className="userInfo__span">{city}</span>
      </p>
      <p className="user__phone userInfo">
        phone:<span className="userInfo__span">{phone}</span>
      </p>
      <p className="user__company userInfo">
        company:<span className="userInfo__span">{company}</span>
      </p>
      <button onClick={() => movetoAlbum(id)} className="userBtn">
        Album
      </button>
    </div>
  );
};

export default User;
