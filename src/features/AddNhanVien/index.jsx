import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../Components/Header';
import '../AddNhanVien/style.scss';

AddNhanVien.propTypes = {
    
};

function AddNhanVien(props) {
    return (
        <div>
            <Header/>
            <h2 className="status">Thêm Nhân Viên</h2>
        </div>
    );
}

export default AddNhanVien;