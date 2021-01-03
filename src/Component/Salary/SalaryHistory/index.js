import React ,{useState,useEffect} from 'react';
import Header from './../../Common/Header';
import {Table} from 'react-bootstrap';
import {GetListAttendances,deleteAttendaces,checkOutAttendances,GetListAttendancesSalary} from './../../../api/attendances';
import { toast } from 'react-toastify';
import moment from 'moment'
import './index.css'
export default function(){
    const [listData,setListData] = useState([]);
    useEffect(()=>{
        GetListAttendancesSalary().then(result=>{
            console.log(result.data);
            setListData(result.data);
        })
    },[])
    const _deleteAttendances =(id)=>{
        if(window.confirm("Bạn Có Thực Sự Muốn Xóa Không")){
            deleteAttendaces(id).then(result=>{
                GetListAttendances().then(result=>{
                    setListData(result.data);
                })
                toast.success("Xóa Thành Công!!!")
            })
            
        }
    }
    const _checkOutAttendances =(id)=>{
        checkOutAttendances(id).then(result=>{
            console.log(result);
            GetListAttendancesSalary().then(result=>{
                setListData(result.data);
            })
            toast.success("Check Out Thành Công!!!")
        }).catch(error=>console.log(error))
    }
    const getTotalTime=(checkIn,checkOut)=>{
        const checkInTime = moment(checkIn);
        const checkOutTime = moment(checkOut);
        const Total = checkOutTime.diff(checkInTime,"hours");
        return Total ;
    }
    const getSalary=(checkIn,checkOut,salary)=>{
        const checkInTime = moment(checkIn);
        const checkOutTime = moment(checkOut);
        const Total = checkOutTime.diff(checkInTime,"hours");
        return Total*salary ;
    }
    const ShowListData =()=>{
        return listData.map((item,index)=>{
            return(
                <tr  style={{padding:"15px 0"}} key={item._id}>
                    <td>{index+1}</td>
                    <td>{moment( item.createdAt).format("YYYY-MM-DD")}</td>
                    <td>{item.user.fullname}</td>
                    <td>{item.user.department}</td>
                    <td>{ShowShipData(item.shift)}</td>
                    <td>{moment(item.checkIn).format("YYYY-MM-DD HH:mm:ss")}</td>
                    <td>
                        {item.checkOut?moment(item.checkOut).format("YYYY-MM-DD HH:mm:ss"):
                            <button  className={"checkOutButton"} onClick={()=>_checkOutAttendances(item._id)}>CheckOut</button>
                        }
                    </td>
                    <td>{getTotalTime(item.checkIn,item.checkOut)}</td>
                    <td>{getSalary(item.checkIn,item.checkOut,item.user.salary)}</td>
                </tr>
            )
        })
    }
    const ShowShipData =(shift)=>{
        let text ="Sáng" ;
        let classData ="MorningClass";
        if(shift===2){
            text="Chiều";
            classData="afternoonClass"
        } 
        if(shift===3){
            text="Tối"
            classData="nightClass"
        }
        return (
            <span className={classData}>{text}</span>
        )
    }
    return(
        <div>
            <Header />
            <div>
                <div className="HeaderEditAttendances">
                    <div className="TextHeader">
                        <span style={{color:"#000000",fontWeight:"bold",fontSize:"17px"}}>Lương</span><span>-></span><span>Lịch Sử Lương Nhân Viên</span>
                    </div>
                    <div className="TextContent">
                        <span style={{backgroundColor:"white",padding:"5px 15px"}}>Tất Cả</span>
                        <span>Trang 1/<span style={{color:"white"}}>1</span> </span>
                    </div>
                </div>
                <div className="ContentTable">
                    <Table className="TableDataHistory">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Ngày</th>
                                <th>Nhân Viên</th>
                                <th>Văn Phòng Làm Việc</th>
                                <th>Ca</th>
                                <th>CheckIn</th>
                                <th>CheckOut</th>
                                <th>Thời Gian</th>
                                <th>Lương</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ShowListData()
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}