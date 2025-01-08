import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { firebaseAuth } from "./config";

//Cada provider sera consumido y utilizado por los thunks para realizar la autenticacion

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  console.log(firebaseAuth);
  try {
    const result = await signInWithPopup(firebaseAuth, googleProvider);
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    const { displayName, email, photoURL, uid } = result.user;
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    return {
      ok: false,
      errorCode,
      errorMessage,
    };
  }
};

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );

    const { uid, photoURL } = resp.user;

    await updateProfile(firebaseAuth.currentUser, {
      displayName,
    });

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      errorCode: error.code,
      errorMessage: error.message,
    };
  }
};
