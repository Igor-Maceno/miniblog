import { db } from '../firebase/config'

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useState, useEffect } from "react";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  //cleanuo
  //deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  //Register

  const createUser = async (data) => {
    checkIfIsCancelled();

    setLoading(true);
    setError(null);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, {
        displayName: data.displayName,
      });

      setLoading(false);

      return user;
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);

      let systemMessageError

      if(error.message.includes("password")){
        systemMessageError = "A senha deve conter pelo menos 6 caracteres."  
      } else if(error.message.includes("email-already")){
        systemMessageError = "E-mail já cadastrado."
      } else {
        systemMessageError = "Ocorreu um erro, tente novamente mais tarde!"
      }

      setLoading(false)
      setError(systemMessageError)
    }
  };

  //Sign out - logout
  const logout = () => {

    checkIfIsCancelled()
    signOut(auth)
  }

  //Sign in - login
  const login = async( data ) => {
    checkIfIsCancelled()

    setLoading(true)
    setError(false)
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password)
      setLoading(false)
    } catch (error) {
      let systemMessageError

      if(error.message.includes("user-not-found")){
        systemMessageError = "Usuário não encontrado!"
      } else if(error.message.includes("wrong-password")){
        systemMessageError = "Senha incorreta!"
      } else {
        systemMessageError = "Ocorreu um erro por favor, tente novamente mais tarde!"
      }

      setError(systemMessageError);
      setLoading(false)
    }
  }

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login,
  };
};
