import { useState, useEffect } from "react";
import iconLoading from "../img/loading.gif";

import Contact from "./Contcact";
import FormContact from "./FormContact";

const App = () => {
  const [list, setList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [useForm, setState] = useState(false);

  const url = "https://jsonplaceholder.typicode.com/users";

  const loading = isLoading && <img src={iconLoading} />;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setList(res));
    setLoading(false);
  }, []);

  const deleteContact = (id) => {
    const newList = list.filter((person) => person.id !== id);
    setList(newList);
  };

  const activeFormContact = () => {
    setState(true);
  };

  const cancelForm = () => {
    setState(false);
  };

  const createNewContact = (values) => {
    if (values.name !== "" && values.surname !== "" && values.phone !== "") {
      const name = values.name + " " + values.surname;
      const id = Math.random();
      setList([...list, { name: name, id: id, phone: values.phone }]);
      setState(false);
    }
  };

  return (
    <div>
      {loading}
      <table className="tableContacts">
        <tbody>
          {list.map((person) => (
            <Contact
              id={person.id}
              deleteContact={deleteContact}
              key={person.name}
              name={person.name.split(" ")[0]}
              surname={person.name.split(" ")[1]}
              phone={person.phone}
            />
          ))}
        </tbody>
      </table>
      <button onClick={activeFormContact} className="button">
        Add New Contact
      </button>
      {useForm && (
        <FormContact
          cancelForm={cancelForm}
          createNewContact={createNewContact}
        />
      )}
    </div>
  );
};

export default App;
