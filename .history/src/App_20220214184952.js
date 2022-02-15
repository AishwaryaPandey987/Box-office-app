import React from 'react';
import { Switch, Route } from 'react-router-dom';
import nav  from './components/nav';


function App() {
  return (
    <div>
         <nav/>
      <Switch>
        <Route exact path="/">
          This is home page.
        </Route>

        <Route exact path="/starred">
          This is starred.
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
