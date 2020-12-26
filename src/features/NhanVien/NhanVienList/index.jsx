import React from 'react';
import PropTypes from 'prop-types';
import '../NhanVienList/style.scss';
import NhanVienDetails from '../nhanvien';
import '../NhanVienList/style.scss'

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