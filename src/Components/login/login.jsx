import React from 'react';
import PropTypes from 'prop-types';
import loginIcon from '../../Img/iconuser.png';

login.propTypes = {

};

function login(props) {
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
              <label htmlFor="username">Email/Mã nhân viên*</label>
              <input type="text" name="username" placeholder="Username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mật khẩu*</label>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <button type="button" className="btn">
              Đăng nhập
            </button>
            <a href="">
              Quên mật khẩu
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;