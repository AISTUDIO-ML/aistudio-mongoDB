// import React from 'react';
import { auth, GoogleAuthProvider } from '../../firebase';
import { signInWithPopup, OAuthCredential } from 'firebase/auth';
import { useUserStore } from "../../store/user";
import { AiFillGoogleCircle } from "react-icons/ai";

const GoogleSignIn = () => {
  const setUser = useUserStore((state: any) => state.setUser);

  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Get the credential
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {
          // This gives you a Google Access Token. You can use it to access Google APIs.
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          console.log('Access Token:', token);
          console.log('User:', user);
          localStorage.setItem("token", JSON.stringify(token));
          setUser({ token: token });
          } else {
          console.log('No credentials provided by the sign in operation.');
        }
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        console.error('Error Code:', errorCode);
        console.error('Error Message:', errorMessage);
        console.error('Email associated with the error:', email);
      });
  };

  return (
    // <button onClick={handleSignIn}>Sign in with Google</button>
    <a onClick={handleSignIn}>
      <AiFillGoogleCircle size={30} className="social-icons" />
    </a>
  );
};

export default GoogleSignIn;
