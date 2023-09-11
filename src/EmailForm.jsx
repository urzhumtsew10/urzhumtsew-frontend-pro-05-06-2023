import { useController } from "react-hook-form";

const getEmailTypeError = (type) => {
  switch (type) {
    case "email":
      return "Email is not valid";
    case "required":
      return "Email is required";
  }
};

const EmailForm = () => {
  const { field, fieldState } = useController({ name: "email" });
  const { error } = fieldState;
  return (
    <label className="form__label">
      Email
      {error?.type && (
        <p className="errorMsg">{getEmailTypeError(error.type)}</p>
      )}
      <input className="form__input" type="text" {...field} />
    </label>
  );
};

export default EmailForm;
