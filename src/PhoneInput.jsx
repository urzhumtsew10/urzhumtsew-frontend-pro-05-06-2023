import { useController } from "react-hook-form";

const getPhoneTypeError = (type) => {
  console.log({ type });
  switch (type) {
    case "matches":
      return "Phone is not valid";
    case "required":
      return "Phone is required";
    case "length":
      return "Phone length is not 12 numbers";
  }
};

const PhoneInput = () => {
  const { field, fieldState } = useController({ name: "phone" });
  const { error } = fieldState;
  return (
    <label className="form__label">
      Phone
      {error?.type && (
        <p className="errorMsg">{getPhoneTypeError(error.type)}</p>
      )}
      <input className="form__input" type="text" {...field} />
    </label>
  );
};

export default PhoneInput;
