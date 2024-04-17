import React from 'react';
import { auth, GithubAuthProvider } from '../../firebase';
import { signInWithPopup, OAuthCredential } from 'firebase/auth';
import { useUserStore } from "../../store/user";
import { AiFillGithub } from "react-icons/ai";

const GithubSignIn = () => {
  const setUser = useUserStore((state: any) => state.setUser);

  const handleSignIn = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Get the credential from the result.
        const credential = GithubAuthProvider.credentialFromResult(result);
        console.log(credential, "------------")
        if (credential) {
          // This gives you a GitHub Access Token. You can use it to access the GitHub API.
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          console.log('GitHub Access Token:', token);
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
    <a onClick={handleSignIn}>
      <AiFillGithub size={30} className="social-icons" />
    </a>
  );
};

export default GithubSignIn;
