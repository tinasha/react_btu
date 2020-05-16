import React from 'react';
import './App.css';
import Categories from './Components/Categories';
import Detail from './Components/Detail';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <div className= "App">
          <Router>
            <Switch>
              <Route exact path="/" component={Categories} />
              <Route exact path="/Detail/:cat" component={Detail} />
          </Switch>
        </Router>
       
    </div>
  );
}

export default App;
