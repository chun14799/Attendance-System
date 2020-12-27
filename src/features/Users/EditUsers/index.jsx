import React from 'react';
import ConfirmBackButton from '../../.././components/ConfirmBackButton';
// import PropTypes from 'prop-types';
import Header from '../../../components/Header';
import EditUserList from '../EditUsers/EditList';

// EditNhanVien.propTypes = {
    
// };

function EditUser(props) {
    return (
        <div className="bg">
            <Header/>
            <h2 className="status">Sửa thông tin nhân viên</h2>
            <EditUserList/>
            <ConfirmBackButton/>
        </div>
    );
}

export default EditUser;