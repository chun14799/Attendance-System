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
                <li>{user.id}</li>
                <li className="user-fullName">{user.fullName}</li>
                <li className="user-image">{user.image}</li>
                <li className="user-pin">{user.pin}</li>
                <li className="user-dob">{user.email}</li>
                <li className="user-homeAddress">{user.homeAddress}</li>
                <ul className="btn-edit-delete">
                    <li><a href="/users">Sửa</a></li>
                    <li><a href="/users">Xóa</a></li>
                </ul>
            </ul>
        </div>
  );
}

export default UserDetails;