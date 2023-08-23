const Contact = ({ id, name, surname, phone, deleteContact }) => {
  return (
    <tr className="personData">
      <td className="personData__unit">
        <span className="personData_span">Name:</span> {name}
      </td>
      <td className="personData__unit">
        <span className="personData_span">Surname:</span> {surname}
      </td>
      <td className="personData__unit">
        <span className="personData_span">Phone:</span> {phone}
      </td>
      <td>
        <button onClick={() => deleteContact(id)} className="contactBtn">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Contact;
