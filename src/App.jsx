import { useForm, FormProvider } from "react-hook-form";
import NameForm from "./NameForm";
import EmailForm from "./EmailForm";
import PhoneForm from "./PhoneForm";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  phone: yup
    .string()
    .matches(/^[0-9]+$/)
    .required()
    .length(12),
});

const App = () => {
  const formMethods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });
  const { handleSubmit, register } = formMethods;

  const tryToLoginUser = (data) => {
    alert(`Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}`);
  };

  return (
    <div className="app">
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(tryToLoginUser)} className="app__form">
          <NameForm register={register} />
          <EmailForm register={register} />
          <PhoneForm register={register} />
          <button type="submit" className="app__btn">
            Submit
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default App;
