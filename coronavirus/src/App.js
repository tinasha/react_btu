import React from 'react';
import './App.css';
import All from './Components/All'
import Countries from './Components/Countries'
import Country from './Components/Country'
import States from './Components/States'
import John_Hop from './Components/John_Hop'
import Historical from './Components/Historical'
import {Route } from 'react-router-dom'
import NavBar from "./NavBar"


function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/Components/" component={All} />
      <Route exact path="/Components/Countries" component={Countries} />
      <Route exact path="/Components/Country" component={Country} />
      <Route exact path="/Components/States" component={States} />
      <Route exact path="/Components/John_Hop" component={John_Hop} />
      <Route exact path="/Components/Historical" component={Historical} />
    </div>
  );
}

export default App;
