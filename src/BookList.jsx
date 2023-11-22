import React, { useState, useEffect } from "react";
import "./App.css";


const BookList = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books"
        );
        const data = await response.json();
        setBooks(data.books); // Assuming the array is under the key 'books'
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-container">
      <div className="book-container">
        <div className="book-list">
          {error && <p>Error: {error}</p>}
          <h2>Book List</h2>
          <input
            type="text"
            placeholder="Search books"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ol>
            {filteredBooks.map((book) => (
              <li key={book.id} onClick={() => handleBookClick(book)}>
                <strong>{book.title}</strong> by {book.author}
              </li>
            ))}
          </ol>
        </div>
      </div>

      {selectedBook && (
        <div className="book-details">
          <h3>Selected Book Details</h3>
          <p>ID: {selectedBook.id}</p>
          <p>Title: {selectedBook.title}</p>
          <p>Author: {selectedBook.author}</p>
          <p>Description: {selectedBook.description}</p>
          <p>Available: {selectedBook.available ? "Yes" : "No"}</p>
          <img
            src={selectedBook.coverimage}
            alt={`${selectedBook.title} Cover`}
            style={{ maxWidth: "200px" }}
          />
        </div>
      )}
    </div>
  );
};

export default BookList;