import React from 'react';
import "./style.scss";
import PropTypes from 'prop-types';


EditUserList.propTypes = {
    listUser: PropTypes.array.isRequired,
};


function EditUserList({listUser}) {
    return (
        <div>
            <div className="Edit-list">
                <ul className="edit-info">
                    <li>Full Name</li>
                    <li>Image</li>
                    <li>PIN code</li>
                    <li>Date of Birth</li>
                    <li>Home Address</li>
                    <li>Gross Salary</li>
                    <li>Net Salary</li>
                    <li>Note</li>
                    <li>Department</li>
                    <li>Role</li>
                    <li>Shift</li>
                </ul>
                <ul className="input-info">
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                </ul>
            </div>
        </div>
    );
}

export default EditUserList;