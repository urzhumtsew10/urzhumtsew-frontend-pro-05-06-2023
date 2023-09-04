import { useState, useEffect } from "react";
import User from "./User";

const UsersList = () => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setUsersList(users));
  }, []);

  return (
    <div className="app">
      <div className="usersBox">
        {usersList.map((user) => (
          <User
            id={user.id}
            key={user.id}
            name={user.name}
            surname={user.surname}
            email={user.email}
            phone={user.phone}
            company={user.company.name}
            city={user.address.city}
          />
        ))}
      </div>
    </div>
  );
};

export default UsersList;
