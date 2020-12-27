import React from 'react';
import '../InfoBar/style.scss';

function InfoBar(props) {
    return (
        <div>
            <div className="info-bar">
                <p className="user-id">ID</p>
                <p className="user-fullName">Full Name</p>
                <p className="user-image">Avata</p>
                <p className="user-pin">PIN</p>
                <p className="user-dob">Date of Birth</p>
                <p className="user-homeAddress">Home Address</p>
                <p className="user-grossSalary">Gross Salary</p>
                <p className="user-netSalary">Net Salary</p>
                <p className="user-note">Note</p>
                <p className="user-department">Department</p>
                <p className="user-role">Role</p>
                <p className="user-shift">Shift</p>
                <p className="btn-add"><a href="/addusers">Thêm</a></p>
            </div>
            <hr/>
        </div>
    );
}

export default InfoBar;