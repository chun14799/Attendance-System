import React from 'react';
import "../EditList/style.scss";
import PropTypes from 'prop-types';


EditNhanVienList.propTypes = {
    DSNhanVien: PropTypes.array.isRequired,
};


function EditNhanVienList({DSNhanVien}) {
    return (
        <div>
            <div className="Edit-list">
                <ul className="edit-info">
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
        </div>
    );
}

export default EditNhanVienList;