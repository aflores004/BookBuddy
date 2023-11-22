import { useState, useEffect } from "react";

const IndividualBookDetails = () => {
  const [book, setBook] = useState({});

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(
          "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/1",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setBook(data.book);
        } else {
          console.error(
            "Error fetching book details. HTTP Status:",
            response.status
          );
        }
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookDetails();
  }, []);

  return (
    <div>
      <h2>Details for Book with ID: 1</h2>
      {book ? (
        <div>
          <p>Title: {book.title}</p>
          <p>Author: {book.author}</p>
          <p>Description: {book.description}</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default IndividualBookDetails;
