import React ,{useState}from 'react';
import {toast} from 'react-toastify';
import './login.css';
import { useHistory } from "react-router-dom";
export default function ForgotConfirm(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    let history = useHistory();
    let user = localStorage.getItem('auth-token');
    if(user){
        history.replace("/");
        return null
    }
    
    const OnSubmitLogin = ()=>{
        toast.success("Vui Lòng Kiểm tra email!!")
        history.replace("/login")
    }
    return(
        <div className="ContainerLogin">
            <div className="ContentFrom">
                <div style={{textAlign:"center",marginBottom:"10px"}}>
                    <img src="https://i0.wp.com/s1.uphinh.org/2020/12/25/icon-login-2.png" alt="icon-login"/>
                </div>
               
                <div style={{textAlign:"center",fontSize:"20px"}}>
                    <p>PHẦN MỀM</p>
                    <p>QUẢN LÝ DOANH NGHIỆP</p>
                </div>
                <div style={{marginBottom:"5px"}}>
                    <div style={{fontSize:"12px",color:"#000000",marginBottom:"5px"}}>Nhập Mã Bảo Mật *</div>
                    <div><input type="text"  className="InputStyle" value={email} onChange={(e)=>setEmail(e.target.value) }/></div>
                </div>
                <div style={{marginBottom:"10px"}}>
                    <div style={{fontSize:"12px",color:"#000000",marginBottom:"5px"}}>Mật Khẩu Mới *</div>
                    <div><input type="password" className="InputStyle"value={password} onChange={(e)=>setPassword(e.target.value) } /></div>
                </div>
                <div className="text-center" style={{marginTop:"20px"}}>
                    <span className="LoginButton" onClick={OnSubmitLogin}>Xác Nhận</span>
                </div>
            </div>
        </div>
    )
}