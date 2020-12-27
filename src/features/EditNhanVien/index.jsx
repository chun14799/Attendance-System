import React from 'react';
import ConfirmBackButton from '../../Components/ConfirmBackButton';
// import PropTypes from 'prop-types';
import Header from '../../Components/Header';
import EditNhanVienList from './EditList';

// EditNhanVien.propTypes = {
    
// };

function EditNhanVien(props) {
    return (
        <div className="bg">
            <Header/>
            <h2 className="status">Sửa thông tin nhân viên</h2>
            <EditNhanVienList/>
            <ConfirmBackButton/>
        </div>
    );
}

export default EditNhanVien;