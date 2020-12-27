import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import UserDetails from '../../UserDetails';

UserList.propTypes = {
    listUser: PropTypes.array.isRequired,
};

function UserList({ listUser }) {
    return (
        <div>
            <ul className="user-list">
                {listUser.map(user =>(
                    <li key={user._id}>
                        <UserDetails user={user}/>
                        <hr/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;