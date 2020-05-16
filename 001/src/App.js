import React from 'react';
import './App.css';
import Home from './Components/Home'

import {Route } from 'react-router-dom'
import Navbar from "./NavBar"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" Components={Home} />
    </div>
  );
}

export default App;
