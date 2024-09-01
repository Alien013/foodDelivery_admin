import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/Add" className="sidebar-option">
          <img src={assets.add_icon} alt="" />
          <p>Add Itmes</p>
        </NavLink>
        <NavLink to="/List" className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>List Itmes</p>
        </NavLink>
        <NavLink to="/Orders" className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default sidebar;
