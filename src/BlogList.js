import React from "react";
/*
It will not render, we will get an error:"src/BlogList.js
 Line 6:8:  'blogs' is not defined  no-undef"
 */
const BlogList = () => {
  return (
    <div>
      {blogs.map((blog) => (
        <div>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
