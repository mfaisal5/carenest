import React from 'react';
import LoginPage from './components/LoginPage';
import './App.css'; // Optional global styles
import SignupPage from './components/signupPage';
import StartupPage from './startupPage';
function App() {
  return (
    <div className="App">
 
      <SignupPage />
    <LoginPage/>
   // <StartupPage/>
    </div>
  );
}

export default App;
