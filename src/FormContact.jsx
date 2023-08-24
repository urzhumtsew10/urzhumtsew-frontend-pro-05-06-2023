import { useState } from "react";

const FormContact = ({ cancelForm, createNewContact }) => {
  const [userName, setName] = useState("");
  const [userSurname, setSurname] = useState("");
  const [userPhone, setPhone] = useState("");
  const installationValues = (e) => {
    switch (e.target.id) {
      case "name":
        setName(e.target.value);
        break;
      case "surname":
        setSurname(e.target.value);
        break;
      case "phone":
        setPhone(e.target.value);
        break;
    }
  };

  return (
    <div className="form">
      <div className="form__content">
        <form action="form">
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" onChange={installationValues} />
          <label htmlFor="surname">Surname:</label>
          <input id="surname" type="text" onChange={installationValues} />
          <label htmlFor="phone">Phone:</label>
          <input id="phone" type="phone" onChange={installationValues} />
        </form>
        <div className="form__actions">
          <button
            onClick={() =>
              createNewContact({
                name: userName,
                surname: userSurname,
                phone: userPhone,
              })
            }
            className="action_btn btn-apply"
          >
            Apply
          </button>
          <button
            onClick={() => cancelForm()}
            className="action_btn btn-cancel"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormContact;
