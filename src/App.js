import './App.scss';
import React from 'react';
import { Route } from 'react-router-dom';
import NhanVien from './Features/NhanVien';
import AddNhanVien from './Features/AddNhanVien';
import EditNhanVien from './Features/EditNhanVien';


function App() {
  
  return (
    <div className="App">
      <Route path="/nhanvien" component={NhanVien}/>
      <Route path="/addnhanvien" component={AddNhanVien}/>
      <Route path="/editnhanvien" component={EditNhanVien}/>
    </div>
  );
}

export default App;
