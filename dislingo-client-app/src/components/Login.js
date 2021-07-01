import React from 'react';
import '../Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';

const Login = () => {

  const onHandleClick = () => {
    console.log("clicking")
    auth.signInWithPopup(provider)
    .catch((error) => alert(error.message))
  }

  return (
    <div className="login">
      <div className="login-discord-logo">
        <img src="https://discord.com/assets/cb48d2a8d4991281d7a6a95d2f58195e.svg" alt="" />
      </div>
      <Button onClick={onHandleClick} variant="contained" color="primary">Sign in</Button>
    </div>
  )
}

export default Login