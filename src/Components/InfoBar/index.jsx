import React from 'react';
import '../InfoBar/style.scss';

function InfoBar(props) {
    return (
        <div>
            <div className="info-bar">
                <p className="nhanvien-id">ID</p>
                <p className="nhanvien-name">Tên</p>
                <p className="nhanvien-office">Văn phòng làm việc</p>
                <p className="nhanvien-chucvu">Chức vụ</p>
                <p className="nhanvien-email">Email</p>
                <p className="sdt">Sdt</p>
                <p className="btn-add"><a href="/#">Thêm</a></p>
            </div>
            <hr/>
        </div>
    );
}

export default InfoBar;