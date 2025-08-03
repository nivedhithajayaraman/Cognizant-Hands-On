import React from 'react';

function BlogDetails() {
  const blogs = [
    { id: 1, title: "React Basics", content: "JSX, Props, State" },
    { id: 2, title: "React Advanced", content: "Hooks, Context, Memo" },
  ];

  return (
    <div>
      <h2>Blog Details</h2>
      {blogs.map(blog => (
        <div key={blog.id}>
          <h4>{blog.title}</h4>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;
