import {
  registerUserWithEmailPassword,
  signInWithGoogle,
} from "../../firebase/providers";
import { checkingCredentials, login } from "./authSlice";

//Un thunk es una función que se puede despachar en Redux y que permite manejar lógica asíncrona.
//Es una forma de encapsular lógica de acción asincrónica

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));
    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailPass = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, photoURL, errorMessage } =
      await registerUserWithEmailPassword({ email, password, displayName });
    if (!ok) return dispatch(logout({ errorMessage }));
    dispatch(login({ uid, photoURL, email, displayName }));
  };
};
