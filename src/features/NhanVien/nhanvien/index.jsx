import React from 'react';
import PropTypes from 'prop-types';
import '../nhanvien/style.scss';
NhanVienDetails.propTypes = {
    nhanvien: PropTypes.object.isRequired,
};

function NhanVienDetails({nhanvien}) {
    return (
        <div>
            <ul className="nhanvien-info">
                <li>{nhanvien.id}</li>
                <li className="nhanvien-name">{nhanvien.name}</li>
                <li className="nhanvien-last">{nhanvien.office}</li>
                <li className="nhanvien-last">{nhanvien.chucvu}</li>
                <li className="nhanvien-last">{nhanvien.email}</li>
                <li className="nhanvien-last">{nhanvien.sdt}</li>
                <ul className="btn-edit-delete">
                    <li><a href="">Sửa</a></li>
                    <li><a href="">Xóa</a></li>
                </ul>
            </ul>
        </div>
  );
}

export default NhanVienDetails;