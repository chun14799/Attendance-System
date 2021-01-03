import React from 'react';
import Header from './../../Common/Header';
import {useParams} from 'react-router-dom';
import {getDetialUser,UpdateUserDetial} from './../../../api/user';
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import Author from './../../Common/AuthorComponent';
import './edit.css';
export default function ListEmployee (){
    let history = useHistory();
    const {id}= useParams();
    const [fullname,setFullname] = React.useState("");
    const [phone,setPhone] = React.useState("");
    const [job,setJob] = React.useState("");
    const [department,setDepartment] = React.useState("");
    const [email,setEmail] = React.useState("");
    const [salary,setSalary]=React.useState(0);
    React.useEffect(()=>{
        getDetialUser(id).then(result=>{
            console.log(result);
            setFullname(result.data.fullname)
            setPhone(result.data.phone)
            setJob(result.data.job)
            setDepartment(result.data.department)
            setEmail(result.data.email)
            setSalary(result.data.salary);
        })
    },[])
    const onSubmitUpdate =()=>{
        UpdateUserDetial(id,fullname,department,job,phone,email,salary).then(()=>{
            toast.success("Cập Nhật Thành Công !!!")
            history.push("/employee")
        })
    }
    return (
        <Author>
            <Header></Header>
            <div className="ContainerEdit">
                <div className="EditHeader">
                    <div style={{color:"#000000"}}>Edit User</div>
                </div>
                <div className="MainEdit">
                    <div>
                        <p className="elementEdit"> Tên</p>
                        <div className="elementEdit">
                            <input  type="text" value={fullname}  onChange={(e)=>setFullname(e.target.value)}/>
                        </div>
                        <p className="elementEdit">Chức Vụ</p>
                        <div className="elementEdit">
                            <input  type="text" value={job}  onChange={(e)=>setJob(e.target.value)}/>
                        </div>
                        <p>Văn Phòng</p>
                        <div className="elementEdit">
                            <input  type="text" value={department}  onChange={(e)=>setDepartment(e.target.value)}/>
                        </div>
                        <p className="elementEdit">Email</p>
                        <div className="elementEdit">
                            <input  type="text" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <p className="elementEdit">Phone</p>
                        <div className="elementEdit">
                            <input  type="text" value={phone}  onChange={(e)=>setPhone(e.target.value)}/>
                        </div>
                        <p className="elementEdit">Salary/1h</p>
                        <div className="elementEdit">
                            <input  type="text" value={salary}  onChange={(e)=>setSalary(e.target.value)}/>
                        </div>
                        <div className="elementEdit">
                            <button className="ButtonData" onClick={onSubmitUpdate}>lưu</button>
                            <button className="ButtonData"  onClick={()=>{history.push("/employee")}}>Trờ Về</button>
                        </div>
                    </div>
                </div>
            </div>
        </Author>
    )
}