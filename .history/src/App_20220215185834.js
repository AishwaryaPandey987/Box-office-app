/* eslint-disable no-unused-vars */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import starred from './pages/starred';

import Home from './pages/Home';


// eslint-disable-entire- file react/function-component-definition
function App() {
  return (

      <Switch>
        <Route exact path="/">
         <Home/>
        </Route>

        <Route path="/starred">
          <starred/> 
          </Route>

        <Route>Not Found.</Route>
      </Switch>

  );
}

export default App;
