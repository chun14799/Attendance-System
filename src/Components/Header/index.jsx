import React from 'react';
import PropTypes from 'prop-types';
import '../Header/style.scss';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCaretDown, faCoffee } from '@fortawesome/free-solid-svg-icons'

Header.propTypes = {
    
};

function Header(props) {
    const caretdown = <FontAwesomeIcon icon={faCaretDown} />
    const bell = <FontAwesomeIcon icon={faBell}/>
    return (
        <div>
            <div className="header-menu">
                <ul className="left-menu">
                    <li><a href="">Home</a></li>
                    <li><a href="">Nhân Viên</a></li>
                    <li>
                        <a href="">{caretdown}</a>
                        <ul className="dropdown">
                            <li><a href="">Danh sách nhân viên</a></li>
                            <li><a href="">Lịch sử chấm công</a></li>
                        </ul>
                    </li>
                    <li><a href="">Chấm công</a></li>
                    <li>
                        <a href="">{caretdown}</a>
                        <ul className="dropdown-chamcong">
                            <li><a href="">Chấm công ra vào</a></li>
                            <li><a href="">Lịch sử chấm công</a></li>
                        </ul>
                    </li>
                    <li><a href="">Quản lý dự án</a></li>
                </ul>

                <ul className="right-menu">
                    <li><a href="">{bell}</a></li>
                    <li className="user-name"><a href="">Hoàng Long</a></li>
                    <li>
                        <a href="">{caretdown}</a>
                        <ul className="dropdown">
                            <li><a href="">Xem profile</a></li>
                            <li><a href="">Đăng xuất</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="container2">
                <div className="text-box">
                    <p>Tất cả</p>
                </div>
            </div>
            <div className="info-bar">
                <p>ID</p>
                <p className="nhanvien-name">Tên</p>
                <p className="nhanvien-office">Văn phòng làm việc</p>
                <p className="nhanvien-chucvu">Chức vụ</p>
                <p className="nhanvien-email">Email</p>
                <p className="sdt">Sdt</p>
                <button className="btn-add">Thêm</button>
            </div>
            <hr/>
        </div>
    );
}

export default Header;