import {React,useState} from "react";
import './upload.css';

{/*sending data from front end to backend*/}
const UploadData=()=>{
    const[postsData,setPostData]=useState([])
    const requestOptions = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({text:postsData})  //{/*htttp request ko body ma json data send gareko and schema ko value dec eutaihunu parxa*/}
    };

    
    const postData=()=>{
            fetch('http://localhost:5000/upload',requestOptions)
            
    }

    return(
        <>
        <div className="postInput">
        <input type="text" onKeyUp={(e)=>setPostData(e.target.value)} />   
        <button onClick={()=>postData()}>Upolad</button>
          {/*upolad button press garda postuser() function call hunxa jasle 
        fetc() gareko netwrok call garxa*/}

        </div>
        </>
    )
}

export default UploadData