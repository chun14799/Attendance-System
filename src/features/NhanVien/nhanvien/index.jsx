import React from 'react';
import PropTypes from 'prop-types';
import '../nhanvien/style.scss';
NhanVienDetails.propTypes = {
    nhanvien: PropTypes.object.isRequired,
};

function NhanVienDetails({nhanvien}) {
    return (
        <div className="nhanvien-info">
            <ul>
                <li>{nhanvien.id}</li>
                <li className="nhanvien-name">{nhanvien.name}</li>
                <li className="nhanvien-last">{nhanvien.office}</li>
                <li className="nhanvien-last">{nhanvien.chucvu}</li>
                <li className="nhanvien-last">{nhanvien.email}</li>
                <li className="nhanvien-last">{nhanvien.sdt}</li>
            </ul>
        </div>
  );
}

export default NhanVienDetails;