import React from "react";
import './App.css';
import Login from "./containers/Auth/login";
import Register from "./containers/Auth/register";
import {Route,Routes } from "react-router-dom";
import UploadData from "../../Client/src/containers/Home/upload";
import UploadShow from "./containers/Home/uploadShow";
const App = ()=> {
  return (
    
      <Routes>
     <Route exact path="/" element={<Login/>} />
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/upload" element={<UploadData/>}/>
      <Route exact path="/uploadshow" element={<UploadShow/>}/>
    </Routes>
   
    
  
    

  
     
    
  )
}

export default App;
