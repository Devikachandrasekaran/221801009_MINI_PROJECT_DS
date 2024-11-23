// src/App.js

import React from 'react';
import Discover from './pages/Discover';
import './App.css';
import LoginPage from './pages/LoginPage';


function App() {
  return (
    <div className="App">
      <Discover />
      <LoginPage />
    </div>
  );
}

export default App;
