import React from 'react';
import PropTypes from 'prop-types';
import './MainHeader.css';

const MainHeader = () => (
    <div className="header">
      <div className="navigation_buttons">
        <button className="previous"></button>
        <button className="next"></button>
      </div>
      <div className="action_buttons">
        <button className="upgradebtn">Upgrade</button>
        <button className="profilebtn">Profile</button>
      </div>
    </div>
  
);

MainHeader.propTypes = {};

MainHeader.defaultProps = {};

export default MainHeader;
