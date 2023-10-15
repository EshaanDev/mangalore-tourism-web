import { signInWithPopup } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import { auth, provider } from "../config.js";
import "./comp-styles/Header.css";

function SignIn() {
    const [signIn, setSignIn] = useState(false);
    const [signOut, setSignOut] = useState(false);
  
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setSignIn(!signIn);
          setSignOut(!signOut);
        } else {
        }
      });
    }, []);
  
    const userSignOut = () => {
      auth.signOut();
      // alert("Logged out, Please refresh the page");
      window.location.reload(false);
    };
  
    const GoogleSignIn = () => {
      signInWithPopup(auth, provider)
        .then((data) => {
          const profilePic = data.user.photoURL;
          localStorage.setItem("profilePic", profilePic);
        })
        .catch((err) => { });
    };
    return(
        <>
         {signIn ? (
                <div onClick={userSignOut} className="user-div">
                  |
                  <img src={localStorage.getItem("profilePic")} alt="" />
                  <h2>Logout</h2>
                </div>
              ) : (
                <button className="signIn-btn" onClick={GoogleSignIn}>Sign In</button>
              )}
        </>
    )
}

export default SignIn