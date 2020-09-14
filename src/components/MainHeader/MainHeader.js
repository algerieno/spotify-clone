import React from "react";
import PropTypes from "prop-types";
import "./MainHeader.css";
import { useDataLayerValue } from "../../utils/DataLayer";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIosSharp";
import Avatar from "@material-ui/core/Avatar";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const MainHeader = () => {
  const [{ user, profile_image }] = useDataLayerValue();
  return (
    <div className="header">
      <div className="navigation_buttons">
        <button className="previous">
          <ArrowBackIosOutlinedIcon fontSize="small" />
        </button>
        <button className="next">
          <ArrowForwardIosSharpIcon fontSize="small" />
        </button>
      </div>
      <div className="action_buttons">
        <button className="upgradebtn">Upgrade</button>
        <button className="profilebtn">
          <Avatar alt="Remy Sharp" src="" className="avatar_image" />
          <div className="profile_name">
            <h4>{user ? user.split(" ")[0] : "John"}</h4>
          </div>
          <ArrowDropDownIcon />
        </button>
      </div>
    </div>
  );
};

MainHeader.propTypes = {};

MainHeader.defaultProps = {};

export default MainHeader;
