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
        console.log(email);
        console.log(password);
        LoginUser(email,password).then(result=>{
           if(result.data.message=="ERROR"){
            toast.error("Tên Đăng Nhập Hoặc Tài Khoản Chưa Chính Xác")
           }
           else {
                toast.success("Đăng Nhập Thành Công!!!")
                localStorage.setItem("USER",JSON.stringify(result.data.data));
                history.replace("/")
           }
        })
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
                    <div style={{fontSize:"12px",color:"#000000",marginBottom:"5px"}}>Mật khẩu *</div>
                    <div><input type="password" className="InputStyle"value={password} onChange={(e)=>setPassword(e.target.value) } /></div>
                </div>
                <div className="text-center" style={{marginTop:"20px"}}>
                    <span className="LoginButton" onClick={OnSubmitLogin}>Đăng Nhập</span>
                </div>
                <div className="text-center" style={{marginTop:"20px"}}>
                    <Link to="/forgot-password" style={{color:"#06A1F8"}}>Quên mật khẩu?</Link>
                </div>
            </div>
        </div>
    )
}