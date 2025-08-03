import React, { useState } from 'react';
import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [view, setView] = useState('book');

  let content;
  if (view === 'book') {
    content = <BookDetails />;
  } else if (view === 'blog') {
    content = <BlogDetails />;
  } else {
    content = <CourseDetails />;
  }

  return (
    <div className="App">
      <h1>Blogger App</h1>
      <button onClick={() => setView('book')}>Book Details</button>
      <button onClick={() => setView('blog')}>Blog Details</button>
      <button onClick={() => setView('course')}>Course Details</button>
      <div>{content}</div>
    </div>
  );
}

export default App;
