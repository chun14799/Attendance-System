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
                <li className="user-name">{user.name}</li>
                <li className="user-last">{user.office}</li>
                <li className="user-last">{user.chucvu}</li>
                <li className="user-last">{user.email}</li>
                <li className="user-last">{user.sdt}</li>
                <ul className="btn-edit-delete">
                    <li><a href="/#">Sửa</a></li>
                    <li><a href="/#">Xóa</a></li>
                </ul>
            </ul>
        </div>
  );
}

export default UserDetails;