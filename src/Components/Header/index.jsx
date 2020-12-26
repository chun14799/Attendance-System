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
                    <li><a href="">Nhân Viên {caretdown}</a></li>
                    <li><a href="">Chấm công {caretdown}</a></li>
                    <li><a href="">Quản lý dự án</a></li>
                </ul>

                <ul className="right-menu">
                    <li><a href="">{bell}</a></li>
                    <li className="user-name"><a href="">Hoàng Long</a></li>
                    <li><a href="">{caretdown}</a></li>
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
                <p className="space">Văn phòng làm việc</p>
                <p className="chucvu">Chức vụ</p>
                <p>Email</p>
                <p className="sdt">Sdt</p>
                <button className="btn-add">Thêm</button>
            </div>
            <hr/>
        </div>
    );
}

export default Header;