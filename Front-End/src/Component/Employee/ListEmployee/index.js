import React from 'react';
import Header from './../../Common/Header';
import './listEmployee.css'
import {Table} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import {getListUser,deleteUser} from './../../../api/user';
import { toast } from 'react-toastify';
import Author from './../../Common/AuthorComponent';
export default function ListEmployee (){
    let history = useHistory();
    const [listUser,setListUser]= React.useState([]);
    React.useEffect(()=>{
        getListUser().then(result=>{
           setListUser(result.data);
           console.log(result.data);
        })
    },[])
    const onHanderClickFix =(id)=>{
        history.push(`/employee/edit/${id}`)
    }
    const onAddEmployee =()=>{
        history.push(`/employee/add`)
    }
    const onDeleteUser =(id)=>{
        if(window.confirm("Bạn Muốn Xóa Nhân Viên Này Không")){
            deleteUser(id).then(result=>{
                getListUser().then(result=>{
                    setListUser(result.data);
                 })
                 toast.success("Xóa Thành Công!!!")
            })
        }
    }
    const showDataList = ()=>{
        return listUser.map((item,index)=>{
            return(
                <tr style={{padding:"15px 0"}} key={item._id}>
                    <td>{index+1}</td>
                    <td>{item.fullname}</td>
                    <td>{item.department}</td>
                    <td>{item.job}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                        <span style={{color:"#09A6FF",marginRight:"10px",cursor:"pointer"}} onClick={()=>onHanderClickFix(item._id)} > Sửa</span>
                        <span style={{color:"#C4C4C4",cursor:"pointer"}} onClick={()=>onDeleteUser(item._id)}> Xóa</span>
                    </td>
                </tr>
            )
        })
    }
    return (
        <Author>
            <Header></Header>
            <div className="ContainerList">
                <div className="ListHeader">
                    <div style={{padding:"0px 60px",display:"flex" ,flexDirection:"row",justifyContent:"space-between"}}>
                        <div className="TextHeader" >Tất Cả</div>
                        <div >Trang 1/ <span style={{color:"white"}}>1</span> </div>
                    </div>
                </div>
                <div className="ContentListData">
                    <Table >
                        <thead>
                            <tr >
                                <th>ID</th>
                                <th>Tên</th>
                                <th>Văn Phòng Làm Việc</th>
                                <th>Chức Vu</th>
                                <th>Email</th>
                                <th>SĐT</th>
                                <th><span style={{backgroundColor:"#0EFC25",padding:"5px 10px",borderRadius:"5px",cursor:"pointer"}} onClick={onAddEmployee}>Thêm</span></th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            showDataList()
                        }
                        </tbody>
                       
                    </Table>
                </div>
            </div>
        </Author>
    )
}