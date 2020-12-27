import React from 'react';
// import PropTypes from 'prop-types';
import '../ConfirmBackButton/style.scss';
// ConfirmBackButton.propTypes = {
    
// };

function ConfirmBackButton(props) {
    return (
        <div className="button">
            <p><a href="/nhanvien">Lưu</a></p>
            <p><a href="/nhanvien">Trở về</a></p>
        </div>
    );
}

export default ConfirmBackButton;