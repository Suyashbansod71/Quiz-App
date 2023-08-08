import React, {useState} from 'react';
//import Layout from '../components/Layout';
import { Button,Form, Input, Col, Row, message } from 'antd'; // Import Form from ant design
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/SideBar';
import axios from "axios";
import "./../styles/CreateQuiz.css";
import ReactQuill from "react-quill";
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

const CreateQuiz = () => {
  
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
    ],
  };

  //const { quill, quillRef } = useQuill({modules});
  
  const [optionCount, setOptionCount] = useState(2);
  const [options, setOptions] = useState(["optionA", "optionB"]);
  const [value, setValue] = useState(''); 

  

  const navigate = useNavigate();

  const handleAddOption = () => {
    const newOptionCount = optionCount + 1;
    const newOption = `option${String.fromCharCode(65 + optionCount)}`;
    setOptionCount(newOptionCount);
    setOptions([...options, newOption]);
  };


  const handleFinish = async(values) => {

    try {
      const res= await axios.post("/api/v1/user/createquiz",{
        body: JSON.stringify(values)
      });
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success(res.data.success);
        navigate("/myquiz");
      } else {
        message.error(res.data.success);
      }
    } catch (error) {
      console.log(error);
      message.error("Something Went Wrong ");
    }
  
  };

  // React.useEffect(() => {
  //   if (quill) {
  //     quill.on('text-change', () => {  
  //       console.log(quillRef.current.firstChild.innerHTML); 
  //       setValue(quillRef.current.firstChild.innerHTML);
  //     });
  //   }
  // }, [quill]);

   console.log(value);
  return (
      <Sidebar>
            <Form layout="vertical" onFinish={handleFinish} className=" card m-4">
        <h1 className="text-center">Question 1</h1>
        <div className=' m-2' >
       
        <h4 className="">Drag&Drop </h4>
        
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            {/* <Form.Item>
              <Input type="text" placeholder="Paragraph" name= "ques" className= "box-1 m-3"/>
              <Input placeholder="Option 1 " className='m-2' name="optionA"/>
              <Input placeholder="Option 2" className='m-2' name="optionB"/>
              <Input placeholder="Option 3" className='m-2' name="optionC"/>
              <Input placeholder="Option 4" className='m-2' name="optionD"/>
            </Form.Item> */}
            <Form.Item>
                <Input type="text" placeholder="Paragraph" name="ques1" className="box-1 m-3" />
                {options.map((option, index) => (
                  <Input key={option} placeholder={`Option ${index + 1}`} className='m-2' name="option" />
                ))}
                <Button type="box-2 btn btn-primary" onClick={handleAddOption}>Add Another Option</Button>
      
              </Form.Item>
          </Col>
         
        </Row>
       
        <Row gutter={20}>
              
          <Col xs={24} md={24} lg={8}></Col>
          <Col xs={24} md={24} lg={8}>
       
          </Col>
        </Row>
   
        </div>
      




        <h1 className="text-center ">Question 2</h1>
        <div className=' m-4' >
       
        
        <h4 className="">Drag&Drop </h4>

        {/* <div style={{ width: 500, height: 300 }}>
      <div ref={quillRef} />
    </div> */}
    <ReactQuill 
    theme = "snow" 
    value = {value} 
    onChange={setValue} 
    placeholder="Paragraph" 
    name= "ques2" 
    className='box-1 m-3'
    />
        
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
    
          <Form.Item className='m-5'>
                {/* <Input type="text" placeholder="Paragraph" name= "ques2" className= "box-1 m-3"/>  */}
              <Input placeholder="Option 1 " className='m-1' name="optionA2"/>
              <Input placeholder="Option 2" className='m-1' name="optionB2"/>
              <Input placeholder="Option 3" className='m-2' name="optionC2"/>
              <Input placeholder="Option 4" className='m-2' name="optionD2"/>
            </Form.Item>
          </Col>
         
        </Row>
       
        <Row gutter={20}>
              
          <Col xs={24} md={24} lg={8}></Col>
          <Col xs={24} md={24} lg={8}>
          
          </Col>
        </Row>
    
        </div>
       
        






  
        <h1 className="text-center m-3">Question 3</h1>
        
        <div className=' m-2' >
        
        <h4 className="">Comprehension </h4>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
          <Form.Item>
              <Input type="text" placeholder="Paragraph" name= "ques3" className= "box-1 m-3"/>
              <Input placeholder="Option 1 " className='m-2' name="optionA3"/>
              <Input placeholder="Option 2" className='m-2' name="optionB3"/>
              <Input placeholder="Option 3" className='m-2' name="optionC3"/>
              <Input placeholder="Option 4" className='m-2' name="optionD3"/>
            </Form.Item>
          </Col>
         
        </Row>
       
        <Row gutter={20}>
              
          <Col xs={24} md={24} lg={8}></Col>
          <Col xs={24} md={24} lg={8}>
          </Col>
        </Row>
     
        </div>
        <button className="box-2 btn btn-primary" type="submit">
            SUBMIT
          </button>
        </Form>

      </Sidebar>
  );
}

export default CreateQuiz;
