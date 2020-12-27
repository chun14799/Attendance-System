import React from 'react';
// import PropTypes from 'prop-types';
import './style.scss';

// AddNhanVienList.propTypes = {
    
// };

function AddListUser(props) {
    return (
        <div className="Add-list">
            <ul className="add-info">
                <li>ID</li>
                <li>Họ và Tên</li>
                <li>Chức vụ</li>
                <li>Mail</li>
                <li>Văn phòng</li>
                <li>Sdt</li>
            </ul>
            <ul className="input-info">
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
            </ul>
        </div>
    );
}

export default AddListUser;