/* eslint-disable no-unused-vars */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navs from './components/Navs';
import Home from './pages/Home';
import starred from './pages/starred';


function App() {
  return (
    <div>
      <Navs />

      <Switch>
        <Route exact path="/">
         <Home/>
        </Route>

        <Route  path="/starred">
        <starred/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
