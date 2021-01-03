import React ,{useState,useEffect,useRef}from 'react';
import Header from './../../Common/Header';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {getListUser} from './../../../api/user';
import {CreateCheckInAttendances} from './../../../api/attendances';
import { toast } from 'react-toastify';
import Author from './../../Common/AuthorComponent';
import './index.css'
export default  function(){
    const [listUser,setListUser]=useState([]);
    const [id,setId] = useState(null);
    const [fullname,setFullName]=useState("");
    const [department,setDepartment]= useState("");
    const [email,setEmail]= useState("");
    const [shift,setShift] = useState(1);
    const [note,setNote] = useState("");
    let User = localStorage.getItem("USER");
    User = JSON.parse(User);
    useEffect(()=>{
        getListUser().then((result)=>{
            setListUser(result.data);
        })
    },[])
    const ShowListUser = ()=>{
        return listUser.map((item)=><MenuItem value={item._id} key={item._id}>{item.fullname} </MenuItem>)
    }
    const onChangeUser=(e)=>{
        setId(e.target.value)
        listUser.forEach((item)=>{
            if(item._id==e.target.value){
                setFullName(item.fullname);
                setDepartment(item.department);
                setEmail(item.email);
            }
        })
    }
    const onCreateAttendances =()=>{
        if(!id){
            toast.error("Vui Lòng Chọn Nhân Viên !!!");
        }
        CreateCheckInAttendances(id,shift,note).then(result=>{
            toast.success("Check In Thành Công");
        })
    }
    const _onCreateAttendancesUser=()=>{
        CreateCheckInAttendances(User._id,shift,note).then(result=>{
            toast.success("Check In Thành Công");
        })
    }
    return (
        <Author>
            <Header />
            <div>
                <div className="HeaderMain">
                    <span style={{color:"#000000",fontWeight:"bold",fontSize:"17px"}}>Chấm Công</span><span>-></span><span>Chấm Công Ra Vào</span>
                </div>
                <div className="MainContent">
                    <div style={{flex:1,padding:"0px 30px"}}>
                        <p style={{color:"#000000",fontSize:24}}>Thông tin chấm công</p>
                        <p>
                            Nhập các thông tin để tiến hành chấm công vào ra hệ thống: Bao gồm đầy đủ cả làm việc, thông tin nhân viên
                        </p>
                        <p>
                            Lưu ý khi nhập không nên có người kế bên để tránh lộ thông tin nhân viên ra ngoài
                        </p>
                    </div>
                    <div style={{flex:2,padding:"0px 30px"}}>
                        <p style={{color:"#000000",fontSize:24,paddingLeft:"20px"}}>Ca Làm Việc</p>
                        <div className="MainInput">
                            <div className="InPutName">
                            </div>
                            <div>
                                <Select style={{minWidth:"200px"}} defaultValue={1} onChange={(e)=>setShift(e.target.value)}>
                                        <MenuItem value={1}>Sáng </MenuItem>
                                        <MenuItem value={2}>Trưa</MenuItem>
                                        <MenuItem value={3}>Chiều</MenuItem>
                                        <MenuItem value={4}>Tối</MenuItem>
                                </Select>
                            </div>
                        </div>
                        {User.roleId==1?
                        <React.Fragment>
                        
                            <div className="MainInput">
                                <div className="InPutName">
                                    Chọn Nhân Viên
                                </div>
                                <div>
                                    <Select style={{minWidth:"200px"}} defaultValue={1} onChange={onChangeUser}>
                                        {
                                            ShowListUser()
                                        }
                                    </Select>
                                </div>
                            </div>
                            <div className="MainInput">
                                <div className="InPutName">
                                    Tên Nhân Viên
                                </div>
                                <div>
                                    <input type="text" className="InputData" readOnly value={fullname}/>
                                </div>
                            </div>
                            <div className="MainInput">
                                <div className="InPutName">
                                    Phòng Ban
                                </div>
                                <div>
                                    <input type="text"  className="InputData" readOnly value={department}/>
                                </div>
                            </div>
                            <div className="MainInput">
                                <div className="InPutName">
                                    Email
                                </div>
                                <div>
                                    <input type="text"  className="InputData" readOnly value={email} />
                                </div>
                            </div>
                            <div className="MainInput">
                                <div className="InPutName">
                                    Ghi Chú
                                </div>
                                <div>
                                    <textarea  rows="4" cols="50"  className="InputData" value={note} onChange={(e)=>setNote(e.target.value)}/>
                                </div>
                            </div>
                            <div style={{marginTop:"20px"}}>
                                <button className="btnSubmitData" onClick={onCreateAttendances}>Chấm Công Vào</button>
                            </div>
                        </React.Fragment>:
                        <React.Fragment>
                        
                        <div className="MainInput">
                            <div className="InPutName">
                                Tên Nhân Viên
                            </div>
                            <div>
                                <input type="text" className="InputData" readOnly value={User.fullname}/>
                            </div>
                        </div>
                        <div className="MainInput">
                            <div className="InPutName">
                                Phòng Ban
                            </div>
                            <div>
                                <input type="text"  className="InputData" readOnly value={User.department}/>
                            </div>
                        </div>
                        <div className="MainInput">
                            <div className="InPutName">
                                Email
                            </div>
                            <div>
                                <input type="text"  className="InputData" readOnly value={User.email} />
                            </div>
                        </div>
                        <div className="MainInput">
                            <div className="InPutName">
                                Ghi Chú
                            </div>
                            <div>
                                <textarea  rows="4" cols="50"  className="InputData" value={note} onChange={(e)=>setNote(e.target.value)}/>
                            </div>
                        </div>
                        <div style={{marginTop:"20px"}}>
                            <button className="btnSubmitData" onClick={_onCreateAttendancesUser}>Chấm Công Vào</button>
                        </div>
                    </React.Fragment> 
                    }
                    </div>
                </div>
            </div>
        </Author>
    )
}