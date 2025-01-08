import { createSlice } from "@reduxjs/toolkit";

//Un slice es un objeto que contiene una parte del estado de la aplicación y las funciones que modifican ese estado.

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated", //"checking",'not-authenticated','authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = "authenticated"; //"checking",'not-authenticated','authenticated'
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.errorMessage = null;
    },
    logout: (state, { payload }) => {
      state.status = "not-authenticated"; //"checking",'not-authenticated','authenticated'
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessage = payload.errorMessage;
    },
    checkingCredentials: (state) => {
      state.status = "checking";
    },
  },
});

export const { login, logut, checkingCredentials } = authSlice.actions;
