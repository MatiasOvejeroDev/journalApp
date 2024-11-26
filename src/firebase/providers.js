import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { firebaseAuth } from "./config";

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
    // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
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
    createUserWithEmailAndPassword(firebaseAuth, email, password);
    const resp = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    console.log("🚀 ~ resp:", resp);
    const { uid, photoURL } = resp.user;
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      errorCode: error.code,
      errorMessage: error.message,
    };
  }
};
