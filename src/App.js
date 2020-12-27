import './App.scss';
import React from 'react';
import { Route } from 'react-router-dom';
import Users from './features/Users';
import AddUsers from './features/AddUsers';
import EditUsers from './features/EditUsers';


function App() {
  
  return (
    <div className="App">
      <Route path="/users" component={Users}/>
      <Route path="/addusers" component={AddUsers}/>
      <Route path="/editusers" component={EditUsers}/>
    </div>
  );
}

export default App;
