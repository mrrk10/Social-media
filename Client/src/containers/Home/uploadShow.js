import {React, useEffect,useState } from "react";

const UploadShow=()=>{
    const[userUpload,setUserUpload]=useState([])
    const fetchUploadData=async()=>{
       const response= await fetch('http://localhost:5000/upload')
       const data=await response.json()
    //    console.log(data)
    //    setUserUpload(data)
    
     
       
       
    }
    useEffect(()=>{
       fetchUploadData()
    },[])

    return(
    
        <>
        <h1>This is a show page</h1>
      
        
        </>
        
    )

}

export default UploadShow