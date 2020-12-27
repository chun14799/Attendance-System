import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
UserDetails.propTypes = {
    user: PropTypes.object.isRequired,
};

function UserDetails({user}) {
    return (
        <div>
            <ul className="user-info">
                <li>{user._id}</li>
                <li className="user-fullName">{user.fullName}</li>
                <li className="user-image">{user.imgPath}</li>
                <li className="user-pin">{user.pin}</li>
                <li className="user-dob">{user.dob}</li>
                <li className="user-homeAddress">{user.homeAddress}</li>
                <li className="user-grossSalary">{user.grossSalary}</li>
                <li className="user-netSalary">{user.netSalary}</li>
                <li className="user-note">{user.note}</li>
                <li className="user-departments">{user.departments}</li>
                <li className="user-roles">{user.roles}</li>
                <li className="user-shifts">{user.shifts}</li>

                <ul className="btn-edit-delete">
                    <li><a href="/users">Sửa</a></li>
                    <li><a href="/users">Xóa</a></li>
                </ul>
            </ul>
        </div>
  );
}

export default UserDetails;