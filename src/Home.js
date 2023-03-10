import React, { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);
  return (
    <div>
      <BlogList data_1={blogs} />
    </div>
    /*
       We pass the data "blogs" from "const [blogs, setBlogs]" to
       component "<BlogList />"
       "data_1={blogs}" is a prop that need to be received inside "BlogList" component
       */
  );
};

export default Home;
