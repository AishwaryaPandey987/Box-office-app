/* eslint-disable no-unused-vars */
import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Home from './pages/Home';
import Starred from './pages/Starred';



// eslint-disable-entire- file react/function-component-definition
function App() {
  return (

      <Switch>
        <Route exact path="/">
         <Home/>
        </Route>

        <Route exact  path="/starred">
        <Starred/>
          </Route>

        <Route>Not Found.</Route>
      </Switch>

  );
}

export default App;
