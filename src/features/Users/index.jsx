import React from 'react';
import UserList from './UserList';
import '../Users/style.scss';
import Header from '../../components/Header';
import InfoBar from '../../components/InfoBar';


User.propTypes = {
    
};

function User(props) {
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
    return (
        <div>
            <Header/>
            <h2 className="status">Nguoi dung</h2>
            <InfoBar/>
            <UserList listUser={listUser}/>
        </div>
    );
}

export default User;