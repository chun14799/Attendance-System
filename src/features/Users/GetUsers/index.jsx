import React, { useEffect } from 'react';
import UserList from './UserDetails/UserList';
import './style.scss';
import Header from '../../../components/Header';
import InfoBar from '../../../components/InfoBar';
import userApi from '../../../api/userApi';

const listUser =[
    {
        id: 1,
        name: "Vũ Hoàng Hiệp",
        office: "SPKT",
        chucvu: "Sinh Viên",
        email: "hiepvu@gmail.com",
        sdt: "0903113114",
    },
    {
        id: 2,
        name: "Lê Hồng Danh",
        office: "SPKT",
        chucvu: "Sinh Viên",
        email: "danhle@gmail.com",
        sdt: "0901234567",
    },
    {
        id: 3,
        name: "Đặng Huỳnh Hoàng Long",
        office: "SPKT",
        chucvu: "Sinh Viên",
        email: "longdang@gmail.com",
        sdt: "090876543",
    },
];
function GetUser(props) {
    useEffect(()=>{
        const fetchUsers = async()=>{
            const userList = await userApi.GetAll();
            console.log(userList);
        };
        fetchUsers();
    },[]);
    
    return (
        <div>
            <Header/>
            <h2 className="status">User</h2>
            <InfoBar/>
            <UserList listUser={listUser}/>
        </div>
    );
}

export default GetUser;