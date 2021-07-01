import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Sidebar from './components/Sidebar';
import ChatPanel from './components/ChatPanel';
import Login from './components/Login';
import { selectUser, loginUser, logoutUser } from './features/userSlice';
import { auth } from './firebase';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser); //this is a hook. equivalent to mapstatetoprops and connect

  useEffect(() => {  //where is the user being passed into the firebase authstate method? is it automatically pulled in from firebase?
    auth.onAuthStateChanged((permittedUser) => { //documentation seems to suggest firebase adds current user when called with parameter
      console.log('user is', permittedUser.displayName)

      if (permittedUser) {
         dispatch(loginUser({
           uid: permittedUser.uid,
           photo: permittedUser.photoURL,
           email: permittedUser.email,
           name: permittedUser.displayName
         }))
      } else {
        dispatch(logoutUser())
      }

    });
  }, [dispatch]); //need to look into how useEffect hook works.

  function checkUserRender() {
    return user ? (
      <>
       <Sidebar /> 
       <ChatPanel />
      </>
    ) : (
      <Login />
    )
  }

 

  return (
    <div className="app">
     {checkUserRender()}
    </div>
  );
}

export default App;
