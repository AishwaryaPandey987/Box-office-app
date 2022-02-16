/* eslint-disable no-unused-vars */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import starred from './pages/starred';


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
