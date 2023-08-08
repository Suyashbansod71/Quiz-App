import React from 'react'
import Layout from '../components/Layout';
import { Row } from "antd";
import SideBar from '../components/SideBar';

const HomePage = () => {
  return (
    <SideBar>
    <div>
      <div className="home">
        <div className="search-bar">
          <input
            className="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <div className="card">
          <h3>Student</h3>
          <p>Information about students goes here.</p>
        </div>
        <div className="card">
          <h3>Payment</h3>
          <p>Information about payments goes here.</p>
        </div>
        <div className="card">
          <h3>Course</h3>
          <p>Information about courses goes here.</p>
        </div>
        <div className="card">
          <h3>User</h3>
          <p>Information about users goes here.</p>
        </div>
      </div>
    </div>
  </SideBar>
    
  )
}

export default HomePage