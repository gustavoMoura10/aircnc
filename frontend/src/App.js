import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.svg'

import Routes from './Routes';

function App() {
  
  return (
    <div className="container">
      <img src={logo} alt="AirCnc" />
      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
