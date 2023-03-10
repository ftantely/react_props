import React from "react";
/*
It will not render, we will get an error:"src/BlogList.js
 Line 6:8:  'blogs' is not defined  no-undef"
 */
const BlogList = ({ data_1 }) => {
  // const test = props.data_1;

  return (
    <div>
      {data_1.map((blog) => (
        <div>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
