import './App.scss';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GetUsers from './features/Users/GetUsers';
import AddUsers from './features/Users/AddUsers';
import EditUsers from './features/Users/EditUsers';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/users" component={GetUsers}/>
          <Route path="/addusers" component={AddUsers}/>
          <Route path="/editusers" component={EditUsers}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
