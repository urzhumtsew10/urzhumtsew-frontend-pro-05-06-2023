import { useState } from "react";

const FormContact = ({ cancelForm, createNewContact }) => {
  const [values, setValue] = useState({
    name: "",
    surname: "",
    phone: "",
  });
  const getValue = (e) => {
    switch (e.target.id) {
      case "name":
        setValue({ ...values, name: e.target.value });
        break;
      case "surname":
        setValue({ ...values, surname: e.target.value });
        break;
      case "phone":
        setValue({ ...values, phone: e.target.value });
        break;
    }
  };

  return (
    <div className="form">
      <div className="form__content">
        <form action="form">
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" onChange={getValue} />
          <label htmlFor="surname">Surname:</label>
          <input id="surname" type="text" onChange={getValue} />
          <label htmlFor="phone">Phone:</label>
          <input id="phone" type="phone" onChange={getValue} />
        </form>
        <div className="form__actions">
          <button
            onClick={() => createNewContact(values)}
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
