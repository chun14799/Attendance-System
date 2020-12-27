import React from 'react';
// import PropTypes from 'prop-types';
import Header from '../../../components/Header';
import './style.scss';
import AddListUser from './AddList';
import ConfirmBackButton from '../../../components/ConfirmBackButton';

function AddUser(props) {
    return (
        <div className="bg">
            <Header/>
            <h2 className="status">Thêm Nhân Viên</h2>
            <AddListUser/>
            <ConfirmBackButton/>
        </div>
    );
}

export default AddUser;