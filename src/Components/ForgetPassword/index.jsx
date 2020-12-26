import React from 'react';
import loginIcon from '../../Img/iconuser.png';

ForgetPassword.propTypes = {
    
};

function ForgetPassword(props) {
    return (
        <div className="home-login">
        <div className="base-container">
          <div className="content">
            <div className="image">
              <img src={loginIcon} alt="loginIcon" />
            </div>
            <div className="app-name">PHẦN MỀM<br></br> QUẢN LÝ DOANH NGHIỆP</div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Email đăng ký*</label>
                <input type="text" name="username" placeholder="Username" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Mã nhân viên*</label>
                <input type="text" name="idnv" placeholder="Mã nhân viên" />
              </div>
              <button type="button" className="btn">
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ForgetPassword;