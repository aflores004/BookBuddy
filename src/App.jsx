import React from "react";
import BookList from "./BookList";
import { Link } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Home from './Books';
import IndividualBookDetails from './BooksId';
import LoginForm from "./Authenticate";
import SignUpForm from "./Register";
import { useState } from "react";


const App = () => {
  const [token, setToken] = useState(null)
  return (
    <div id="container">
      <h1>Book Buddy App</h1>
      <div id="navbar">
        <Link to="/books">Home</Link>
        <Link to="/books/id">Book Id</Link>
        <Link to="/register">Register</Link>
        <Link to="/Authenticate">Login</Link>
      </div>
      <div id="main-section"></div>
      <Routes>
        <Route path="/books" element={<Home />} />
        <Route path="/books/id" element={<IndividualBookDetails />} />
        <Route path="/register" element={<SignUpForm />} />
        <Route path="/Authenticate" element={<LoginForm />} />
        
      </Routes>

      <SignUpForm token={token} setToken={setToken} />
      <LoginForm setToken={setToken} />
     

      <BookList />
    
    </div>
  );
};

export default App;