import React, { useEffect, useState } from "react";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
// Corrected: "NewPost" is now an uppercase React component name
export default function NewPost() {
    const [title, setTitle] = useState(""); // Corrected: Initial state is an empty string
    const [subtitle, setSubtitle] = useState(""); // Corrected: Initial state is an empty string
    const navigate = useNavigate();
    useEffect(() => {
        const authToken = Cookies.get('AuthToken');
        if(!authToken){
          navigate("/login");
        }else{
          navigate("/newPost");
        }
    
    }, [])
    

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Submit");
        axios.post('/post/create',{
            name:title,
            postContent:subtitle    
        }).then((data)=>{
            console.log(data);
        }).catch((error)=>{
            console.log(error);
        })
    }
     
    return (
        <div>
            <h1>Create new Post</h1>
            <form action="" onSubmit={handleFormSubmit}>
                <label htmlFor="Title">Title</label>
                <input type="text" id="Title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                <br />
                <label htmlFor="subTitle">SubTitle</label>
                <input type="text" id="subTitle" value={subtitle} onChange={(e) => { setSubtitle(e.target.value) }}/>
                <br />
                <button type="submit">Submit</button>

            </form>
        </div>
    );
}
