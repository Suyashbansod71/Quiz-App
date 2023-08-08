import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateQuiz from "./pages/CreateQuiz";
import Myquiz from "./pages/Myquiz";

// import QuizHolder from "./Context/QuizHolder";
// import Create from "./components/Create"
// import Result from "./components/Result"
// import Quiz from "./components/Quiz";



function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
       <Route path="/" element = {<HomePage/>}/>
       <Route path ="/login" element= {<Login/>} />
      <Route path="/register" element = {<Register/>} />
      <Route path="/createquiz" element = {<CreateQuiz/>}/>
      <Route path="/myquiz" element= {<Myquiz/>}/>
     </Routes>
  
     </BrowserRouter>
   
    </>

    // <QuizHolder>
    
    //   <Quiz/>
    //    <Create/>
    //   <Result/>
    // </QuizHolder>
  );
}

export default App;
