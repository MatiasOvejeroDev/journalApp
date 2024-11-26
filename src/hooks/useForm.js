import { useEffect, useState } from "react";

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({});

  useEffect(() => {
    createValidators(formState);
  }, [formState]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const createValidators = (formState) => {
    const formCheckedValues = {};
    for (const formField of Object.keys(formValidations)) {
      const [fn, message] = formValidations[formField];
      // abajo se crea una propiedad computada con el nombre de la variable formField + 'Valid'
      formCheckedValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : message;
    }
    setFormValidation(formCheckedValues);
  };

  return {
    ...formState,
    ...formValidation,
    formState,
    onInputChange,
    onResetForm,
  };
};
