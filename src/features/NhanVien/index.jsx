import React from 'react';
import PropTypes from 'prop-types';
import NhanVienList from './NhanVienList';
import '../NhanVien/style.scss';
import Header from '../../Components/Header';
import InfoBar from '../../Components/InfoBar';


NhanVien.propTypes = {
    
};

function NhanVien(props) {
    const DSNhanVien =[
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
            <InfoBar/>
            <NhanVienList DSNhanVien={DSNhanVien}/>
        </div>
    );
}

export default NhanVien;