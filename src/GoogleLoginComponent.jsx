import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';

function GoogleLoginComponent({ onLoginSuccess }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleSuccess = (credentialResponse) => {
    console.log('Login Success:', credentialResponse);
    const userProfile = decodeJwt(credentialResponse.credential);
    setUserName(userProfile.name);
    setIsLoggedIn(true);
    onLoginSuccess(userProfile.name); // Call the callback to update Home component state
  };

  const decodeJwt = (token) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(window.atob(base64));
  };

  return (
    <>
      {!isLoggedIn ? (
        <GoogleLogin onSuccess={handleSuccess} />
      ) : (
        <h2>Welcome {userName}</h2>
      )}
    </>
  );
}

export default GoogleLoginComponent;
