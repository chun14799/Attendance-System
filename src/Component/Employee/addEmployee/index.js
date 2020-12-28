import React from 'react';
import Header from './../../Common/Header';
import {createNewUser} from './../../../api/user';
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import Author from './../../Common/AuthorComponent';
import './add.css';
export default function ListEmployee (){
    let history = useHistory();
    const fullname = React.useRef(null);
    const job = React.useRef(null);
    const department = React.useRef(null);
    const email = React.useRef(null);
    const phone = React.useRef(null);
    const onCreateUser=()=>{
        createNewUser(fullname.current.value,job.current.value,department.current.value,email.current.value,phone.current.value).then(result=>{
            toast.success("Thêm Thành Công")
            history.push("/employee")
        })
    }
    return (
        <Author>
            <Header></Header>
            <div className="ContainerEdit">
                <div className="EditHeader">
                    <div style={{color:"#000000"}}>Thêm Nhân Viên</div>
                </div>
                <div className="MainEdit">
                    <div>
                        <p className="elementEdit"> Tên</p>
                        <div className="elementEdit">
                            <input  type="text" ref={fullname} />
                        </div>
                        <p className="elementEdit">Chức Vụ</p>
                        <div className="elementEdit">
                            <input  type="text" ref={job}/>
                        </div>
                        <p>Văn Phòng</p>
                        <div className="elementEdit">
                            <input  type="text" ref={department}/>
                        </div>
                        <p className="elementEdit" >Email</p>
                        <div className="elementEdit">
                            <input  type="text" ref={email}/>
                        </div>
                        <p className="elementEdit" >Phone</p>
                        <div className="elementEdit">
                            <input  type="text" ref={phone}/>
                        </div>
                        <div className="elementEdit">
                            <button className="ButtonData" onClick={onCreateUser}>Lưu</button>
                            <button className="ButtonData" onClick={()=>{history.push("/employee")}}>Trở Về</button>
                        </div>
                    </div>
                </div>
            </div>
        </Author>
    )
}