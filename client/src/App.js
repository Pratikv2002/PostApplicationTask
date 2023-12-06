import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home.js";
import Login from "./pages/login.js";
import NewPost from "./pages/newPost.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/newPost" element={<NewPost/>}></Route>
      </Routes>
    </>
  );
}

export default App;
