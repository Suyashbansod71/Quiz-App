import React from 'react';
import { userMenu } from '../Data/data';
import { Link, useLocation} from "react-router-dom";
import "../styles/Layout.css";


const Layout = () => {
 
    const location = useLocation();
    const SidebarMenu = userMenu;
  return (
     <>
     <div className='main'>
        <div className='layout'>
            <div className='sidebar'>
                <div className='logo'>
                  <h1>QUIZ</h1>    
                  <hr/>
                </div>
                <div className='menu'>
                {SidebarMenu.map((menu) => {
                const isActive = location.pathname === menu.path;
                return (
                  <>
                    <div className={`menu-item ${isActive && "active"}`}>
                      <i className={menu.icon}></i>
                      <Link to={menu.path}>{menu.name}</Link>
                    </div>
                  </>
                );
              })}
                </div>

            </div>
           
        </div>

     </div>
     
     </>
  )
}

export default Layout