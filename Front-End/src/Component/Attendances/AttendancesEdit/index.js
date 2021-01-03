import React from 'react';
import Header from './../../Common/Header';
import {useParams} from 'react-router-dom';
import {getDetialAttendances,UpdateAttendances} from './../../../api/attendances';
import { useHistory } from "react-router-dom";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { toast } from 'react-toastify';
import Author from './../../Common/AuthorComponent';
import moment from 'moment';
import './edit.css';
export default function ListEmployee (){
    let history = useHistory();
    const {id}= useParams();
    const [fullname,setFullname] = React.useState("");
    const [department,setDepartment] = React.useState("");
    const [checkIn,setCheckIn] = React.useState("2017-05-24T10:30");
    const [checkOut,setCheckOut]=React.useState("2017-05-24T10:30");
    const [shift,setShift] = React.useState(1);
    const refCheckIn = React.useRef();
    React.useEffect(()=>{
        getDetialAttendances(id).then(result=>{
            setFullname(result.data.user.fullname);
            setDepartment(result.data.user.department);
            setCheckIn( moment(result.data.checkIn).local().format("YYYY-MM-DDTHH:mm"));
            setCheckOut(moment(result.data.checkOut).local().format("YYYY-MM-DDTHH:mm"))
        })
    },[])
    const onSubmitUpdate =()=>{
        UpdateAttendances(id,shift,checkIn,checkOut).then(result=>{
            console.log(result);
            toast.success("Cập Nhật Thành Công !!!");
            history.goBack();
        })
    }
    return (
        <Author>
            <Header></Header>
            <div className="ContainerEdit">
                <div className="EditHeader">
                    <div style={{color:"#000000"}}>Edit Attendances</div>
                </div>
                <div className="MainEdit">
                    <div>
                        <p className="elementEdit"> Tên</p>
                        <div className="elementEdit">
                            <input  type="text" value={fullname}  onChange={(e)=>setFullname(e.target.value)}  readOnly={true}/>
                        </div>
                        <p>Văn Phòng</p>
                        <div className="elementEdit">
                            <input  type="text" value={department}  onChange={(e)=>setDepartment(e.target.value)} readOnly={true}/>
                        </div>
                        <p className="elementEdit">Ca Làm Việc</p>
                        <div className="elementEdit">
                            <Select style={{minWidth:"200px"}} defaultValue={shift} onChange={(e)=>setShift(e.target.value)}>
                                    <MenuItem value={1}>Sáng </MenuItem>
                                    <MenuItem value={2}>Trưa</MenuItem>
                                    <MenuItem value={3}>Chiều</MenuItem>
                                    <MenuItem value={4}>Tối</MenuItem>
                            </Select>
                        </div>
                        <p className="elementEdit">Check In</p>
                        <div className="elementEdit">
                            <TextField 
                                 id="datetime-local"
                                 type="datetime-local"
                                 //defaultValue={null}
                                 value={checkIn}
                                 onChange={(e)=>{setCheckIn(e.target.value)}}
                            />
                        </div>
                        <p className="elementEdit">Check Out</p>
                        <div className="elementEdit">
                            <TextField 
                                 id="datetime-local"
                                 type="datetime-local"
                                 value={checkOut}
                                 onChange={(e)=>{setCheckOut(e.target.value)}}
                            />
                        </div>
                        <div className="elementEdit">
                            <button className="ButtonData" onClick={onSubmitUpdate}>lưu</button>
                            <button className="ButtonData"  onClick={()=>{history.push("/")}}>Trờ Về</button>
                        </div>
                    </div>
                </div>
            </div>
        </Author>
    )
}