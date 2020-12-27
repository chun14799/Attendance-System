import React from 'react';
// import PropTypes from 'prop-types';
import './style.scss';

// AddNhanVienList.propTypes = {
    
// };

function AddListUser(props) {
    return (
        <div className="Add-list">
            <ul className="add-info">
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
    );
}

export default AddListUser;