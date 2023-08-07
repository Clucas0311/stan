import React, { useState, useEffect } from "react";
import { fetchAllPost } from "./api";
import { Routes, Route } from "react-router-dom";
import AllPosts from "./components/AllPosts";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getAllPosts = async () => {
      const posts = await fetchAllPost();
      console.log(posts);
      setPosts(posts);
    };
    getAllPosts();
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllPosts posts={posts} />} />
      </Routes>
    </div>
  );
};

export default App;
