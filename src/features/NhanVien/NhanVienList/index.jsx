import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import NhanVienDetails from '../NhanVienDetails';


NhanVienList.propTypes = {
    DSNhanVien: PropTypes.array.isRequired,
};

function NhanVienList({ DSNhanVien }) {
    return (
        <div>
            <ul className="nhanvien-list">
                {DSNhanVien.map(nhanvien =>(
                    <li key={nhanvien.id}>
                        <NhanVienDetails nhanvien={nhanvien}/>
                        <hr/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NhanVienList;