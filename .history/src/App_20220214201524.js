import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navs from './components/Navs';
import Home from './pages/Home';
// eslint-disable-next-line no-unused-vars
import starred from './pages/starred';

function App() {
  return (
    <div>
      <Navs />

      <Switch>
        <Route exact path="/">
         <Home/>
        </Route>

        <Route exact path="/starred">
        <starred/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
