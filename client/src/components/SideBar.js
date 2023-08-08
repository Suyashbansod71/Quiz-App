import React from "react";
import "../styles/Sidebar.css";

import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const menuItem = [
    {
      path: "/",
      name: "Home",
   
    },
    {
      path: "/myquiz",
      name: "Myquiz",
     
    },
    {
      path: "/createquiz",
      name: "CreateQuiz",
  
    },
   
    {
        path: "/",
        name: "Logout",
       
      },
  ];

  const adminName = "Suyash Bansod"; 
  //const adminPhotoUrl = require("../components/Admin-Profile-Vector-PNG-File.png");
 

  return (
    <div className="container">
      <div className="sidebar">
        <h1 className="text-center m-4">Quiz</h1>
        <h1 className="Logo">
          <span className="yellow-line"></span>
        </h1>
        <div className="admin_info">
         
          <span className="admin_name">{adminName}</span>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
        
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;