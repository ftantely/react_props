import React from "react";
/*
It will not render, we will get an error:"src/BlogList.js
 Line 6:8:  'blogs' is not defined  no-undef"
 */
const BlogList = (props) => {
  const test = props.data_1;
  return (
    <div>
      {test.map((blog) => (
        <div>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
