import { useEffect, useMemo, useState } from "react";

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({});

  useEffect(() => {
    createValidators(formState);
  }, [formState]);

  //useMemo para que no se ejecute en cada renderizado

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) return false;
    }
    return true;
  }, [formValidation]);

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
    isFormValid,
  };
};
