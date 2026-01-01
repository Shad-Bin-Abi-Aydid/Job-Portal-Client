import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../../firebase/firebase.init";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Set google Provider
  const provider = new GoogleAuthProvider();

  // Create User with Email and password.
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // SignIn user with Email and Password.
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign out user
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Google loginUser
  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      console.log("state Captured by ", currentUser?.email);

      if (currentUser?.email) {
        const user = { email: currentUser.email };

        // when signIn then we doing some process to make a token.
        axios
          .post("http://localhost:3000/jwt", user, { withCredentials: true })
          .then((res) => {
            console.log("LogIn token ", res.data);
            setLoading(false);
          });
      } else {
        // When logout then clear the token from the cookies
        axios
          .post(
            "http://localhost:3000/logout",
            {},
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log("LogOut ", res.data);
            setLoading(false);
          });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    signOutUser,
    signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
