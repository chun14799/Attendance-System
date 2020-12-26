import './App.scss';
import React from 'react';
import { Route } from 'react-router-dom';
import NhanVien from './features/NhanVien';


function App() {
  
  return (
    <div className="App">
      <Route path="/nhanvien" component={NhanVien}/>
    </div>
  );
}

export default App;
