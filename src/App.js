import logo from './logo.svg';
import './App.scss';
import React from 'react';
// import AlbumFeature from './features/Album';
// import ColorBox from './Components/ColorBox';
// import TodoFeature from './features/Todo';
import Login from './Components/login/login';
import Register from './Components/login/register';
import ForgetPassword from './Components/ForgetPassword';

function App() {
  
  return (
    <div className="App">
      <Login/>
      {/* <ForgetPassword/> */}
    </div>
  );
}

export default App;
