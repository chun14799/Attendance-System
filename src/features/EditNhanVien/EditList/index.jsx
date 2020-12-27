import React from 'react';
import "../EditList/style.scss";
import PropTypes from 'prop-types';

EditNhanVienList.propTypes = {
    DSNhanVien: PropTypes.object.isRequired,
};

function EditNhanVienList({DSNhanVien}) {
    return (
        <div>
            <ul className="edit-nhanvien-list">
                {DSNhanVien.filter(nhanvien =>(
                    <input type="text" placeholder={nhanvien.name}/>
                ))}
            </ul>
        </div>
    );
}

export default EditNhanVienList;