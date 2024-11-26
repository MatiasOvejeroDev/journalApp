import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login } from "./authSlice";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    console.log("🚀 ~ return ~ result:", result);
    if (!result.ok) return dispatch(logout(result.errorMessage));
    dispatch(login(result));
  };
};
