import logo from './logo.svg';
import './App.scss';
import React from 'react';
import NhanVien from './features/NhanVien';
import AlbumFeature from './features/Album';
import ColorBox from './Components/ColorBox';
import TodoFeature from './features/Todo';
import Login from './Components/login/login';
import Register from './Components/login/register';
import ForgetPassword from './Components/ForgetPassword';
import { Route } from 'react-router-dom';
import AddNhanVien from './features/AddNhanVien';


function App() {
  
  return (
    <div className="App">
      <Route path="/Login" component={Login}/>  
      {/* <ForgetPassword/> */}
      <Route path="/NhanVien" component={NhanVien} />
      <Route path="/AddNhanVien" component={AddNhanVien}/>
    </div>
  );
}

export default App;
