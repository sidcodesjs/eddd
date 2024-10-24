
import React from 'react';
import { auth, signInWithPopup, provider } from '../firebase';

function SignInButton() {
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Signed in as:', user.displayName); // Display user info in the console
    } catch (error) {
      console.error('Sign-in error:', error.message);
    }
  };

  return (
    <button onClick={handleSignIn} style={{ padding: '10px 20px', backgroundColor: '#4748ac', color: '#fff' }}>
      Sign in with Google
    </button>
  );
}

export default SignInButton;
