import React from 'react';
import "../styles/RegisterStyles.css";
import axios from "axios";
import {Form, Input, message} from "antd";
import {Link, useNavigate} from "react-router-dom"

const Register = () => {

      const navigate = useNavigate();

    const onfinishHandler = async(values) => {
       try {
        const res = await axios.post("/api/v1/user/register", values);
        if(res.data.success){
          message.success("Registered Successfully!")
          navigate("/login");
        }
       } catch (error) {
        console.log(error);
        message.error("Something Went Wrong");
       }
    };

  return (
    
    <>
       <div className= "form-container">
         <Form layout= "vertical" onFinish={onfinishHandler} className='register-form'>
           <h1 className="text-center">Register Page</h1>
           <Form.Item label = "Name" name="name">
             <Input type='text' required />
           </Form.Item>
           <Form.Item label = "Email" name="email">
             <Input type='text' required />
           </Form.Item>
           <Form.Item label = "Password" name="password">
             <Input type='text' required />
           </Form.Item>
           <Link to="/login" className="m-2">Already a User?</Link>
           <button className="btn btn-primary" type="submit">
            Register
          </button>
        </Form> 
   
       </div>
    </>
  )
}

export default Register