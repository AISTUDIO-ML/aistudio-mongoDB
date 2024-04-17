import React from 'react';
import { auth, OAuthProvider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useUserStore } from "../../store/user";
import { BsMicrosoft } from "react-icons/bs";

const MicrosoftSignIn = () => {
  const setUser = useUserStore((state: any) => state.setUser);

  const handleSignIn = () => {
    const provider = new OAuthProvider('microsoft.com');
    provider.setCustomParameters({
      prompt: 'select_account'
    });

    signInWithPopup(auth, provider)
      .then((result) => {
        // Get the credential from the sign-in method
        const credential = OAuthProvider.credentialFromResult(result);
        if (credential) {
          // This gives you a Microsoft Access Token. You can use it to access Microsoft APIs.
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          console.log('Microsoft Access Token:', token);
          console.log('User:', user);
          localStorage.setItem("token", JSON.stringify(token));
          setUser({ token: token });
        } else {
          console.log('No credentials provided by the sign in operation.');
        }
      }).catch((error) => {
        console.error('Authentication failed:', error);
      });
  };

  return (
    <a onClick={handleSignIn}>
      <BsMicrosoft size={23} className="social-icons" />
    </a>
  );
};

export default MicrosoftSignIn;
