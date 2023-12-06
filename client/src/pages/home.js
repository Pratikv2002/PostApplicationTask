import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios";
import PostCard from "../Component/postCard";
import Cookies from 'js-cookie';

export default function Home() {
  const navigate = useNavigate();
  const [postArr, setpostArr] = useState([]);

  useEffect(() => {
    axios
      .get("/post/")
      .then((response) => {
        console.log(response.data.posts);
        setpostArr(response.data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    // This effect will run whenever postArr is updated
    console.log("second", postArr);
  }, [postArr]); // Dependency array includes postArr

  const handleClickLogin = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const handleClickNewPost = useCallback(() => {
    const authToken = Cookies.get('AuthToken');
    if(!authToken){
      navigate("/login");
    }else{
      navigate("/newPost");
    }
    
  }, [navigate]);

  const handleClickLogout = ()=>{
    Cookies.remove('AuthToken');
    navigate("/login");
  }

  return (
    <div>
      <h1>Home page</h1>
      {/* Corrected: Pass the callback function, not the result of the function call */}
      {Cookies.get('AuthToken')?<button onClick={handleClickLogout}>Logout</button>:<button onClick={handleClickLogin}>login</button>}
      <button onClick={handleClickNewPost}>Create New Post</button>

      <div style={{display:"flex", justifyContent:"normal",flexWrap:"wrap"}}>
        {
          // Corrected: Use map instead of foreach, and return the JSX element
          postArr.map((item, index) => (
            <PostCard
              key={index} // Make sure to include a unique key for each element
              Title={item.name}
              SubTitle={item.postContent}
              CreatedBy={item.createdBy}
            />
          ))
        }
      </div>
    </div>
  );
}
