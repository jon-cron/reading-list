import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config.js";
import { useState } from "react";

export const useLogin = () => {
  const [error, setError] = useState(null);

  const login = (email, password) => {
    setError(null);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("user logged is", res.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return { error, login };
};
