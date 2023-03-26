import React, { useState } from 'react';
import './App.css';
import SignUp from './components/SignUp'
import SignIn from './components/SignIn';
import CssBaseline from '@mui/material/CssBaseline';


function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false)
  return (
    <div className="App">
      <CssBaseline />

      {isUserSignedIn ? <SignIn /> : <SignUp />}
    </div>
  );
}

export default App;
