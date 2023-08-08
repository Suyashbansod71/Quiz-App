import React, { useEffect, useState } from 'react';
import Sidebar from '../components/SideBar';
import "./student.css";

const Student = () => {
  const [data, setData] = useState([]);
  const [showStudentList, setShowStudentList] = useState(false);
  const [showFormPopup, setShowFormPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enrollNumber: '',
    dateOfAdmission: ''
  });

  const handleStudentsClick = () => {
    setShowStudentList(true);
  };

  const handleAddNewClick = () => {
    setShowFormPopup(true);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
    
    
    setData([...data, formData]);
    
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      enrollNumber: '',
      dateOfAdmission: ''
    });
   
    setShowFormPopup(false);
  };

  return (
    <>
      <Sidebar>
        <div className="student-page-container">
          {showFormPopup && (
            <div className="overlay">
              <div className="form-popup">
                <form onSubmit={handleFormSubmit}>
                  <h2>Add New Student</h2>
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                  />
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                  />
                  <label htmlFor="phone">Phone:</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    required
                  />
                  <label htmlFor="enrollNumber">Enroll Number:</label>
                  <input
                    type="text"
                    name="enrollNumber"
                    value={formData.enrollNumber}
                    onChange={handleFormChange}
                    required
                  />
                  <label htmlFor="dateOfAdmission">Date of Admission:</label>
                  <input
                    type="date"
                    name="dateOfAdmission"
                    value={formData.dateOfAdmission}
                    onChange={handleFormChange}
                    required
                  />
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          )}

          {showStudentList && (
            <div className="student-list">
              <div className="student-list-header">Student List</div>
              <ul>
                {data.map((student, index) => (
                  <li key={index}>{student.name}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="add-new-button">
            <button onClick={handleAddNewClick}>Add New Student</button>
          </div>

          <table border="1" cellPadding="10" cellSpacing="0">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Enroll number</th>
                <th>Date of admission</th>
              </tr>
            </thead>
            <tbody>
              {data.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td>{student.enrollNumber}</td>
                  <td>{student.dateOfAdmission}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Sidebar>
    </>
  );
};

export default Student;