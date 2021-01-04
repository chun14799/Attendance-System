import React ,{useState}from 'react';
import {LoginUser} from './../../../api/user';
import {
    Link
} from "react-router-dom";
import {toast} from 'react-toastify';
import './login.css';
import { useHistory } from "react-router-dom";
export default function(){
    let history = useHistory();
    let user = localStorage.getItem('USER');
    if(user){
        history.replace("/");
        return null
    }
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const OnSubmitLogin = ()=>{
        toast.success("Vui Lòng Kiểm tra email!!")
        history.replace("/forgot-confirm")
    }
    return(
        <div className="ContainerLogin">
            <div className="ContentFrom">
                <div style={{textAlign:"center",marginBottom:"10px"}}>
                    <img src="https://i0.wp.com/s1.uphinh.org/2020/12/25/icon-login-2.png" />
                </div>
               
                <div style={{textAlign:"center",fontSize:"20px"}}>
                    <p>PHẦN MỀM</p>
                    <p>QUẢN LÝ DOANH NGHIỆP</p>
                </div>
                <div style={{marginBottom:"5px"}}>
                    <div style={{fontSize:"12px",color:"#000000",marginBottom:"5px"}}>Email / Mã nhân viên *</div>
                    <div><input type="text"  className="InputStyle" value={email} onChange={(e)=>setEmail(e.target.value) }/></div>
                </div>
                <div style={{marginBottom:"10px"}}>
                    <div style={{fontSize:"12px",color:"#000000",marginBottom:"5px"}}>Mã Nhân Viên *</div>
                    <div><input type="password" className="InputStyle"value={password} onChange={(e)=>setPassword(e.target.value) } /></div>
                </div>
                <div className="text-center" style={{marginTop:"20px"}}>
                    <span className="LoginButton" onClick={OnSubmitLogin}>Xác Nhận</span>
                </div>
            </div>
        </div>
    )
}