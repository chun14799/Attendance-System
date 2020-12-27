import React from 'react';
// import PropTypes from 'prop-types';
import Header from '../../components/Header';
import './style.scss';
import AddNhanVienList from './AddList';
import ConfirmBackButton from '../../components/ConfirmBackButton';

// AddNhanVien.propTypes = {
    
// };

function AddNhanVien(props) {
    return (
        <div className="bg">
            <Header/>
            <h2 className="status">Thêm Nhân Viên</h2>
            <AddNhanVienList/>
            <ConfirmBackButton/>
        </div>
    );
}

export default AddNhanVien;