import React from "react";
import "./SideBarOption.css";

function SideBarOption({ title, Icon, color }) {
  return (
    <div className={"sidebar_option"}>
      {Icon && <Icon className="sidebar_option_icon" color={color} />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SideBarOption;
