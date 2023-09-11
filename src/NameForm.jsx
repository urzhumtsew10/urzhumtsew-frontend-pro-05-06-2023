import { useController } from "react-hook-form";

const NameForm = () => {
  const { field, fieldState } = useController({ name: "name" });
  const { error } = fieldState;
  return (
    <label className="form__label">
      Name
      {error?.type && <p className="errorMsg">Name is required</p>}
      <input className="form__input" name="name" type="text" {...field} />
    </label>
  );
};

export default NameForm;
