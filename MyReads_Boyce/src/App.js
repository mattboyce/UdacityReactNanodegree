import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import * as dataApi from './BooksAPI';
import { Bookshelf } from './pages/Bookshelf';
import { BookSearch } from './pages/BookSearch';

function App() {
  const [bookshelfData, setBookshelfData] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const response = await dataApi.getAll();
      setBookshelfData(response);
    };

    getBooks();
  }, []);

  const updateBookState = (bookId, newShelf) => {
    setBookshelfData(
      bookshelfData.map((book) =>
        book.id === bookId ? { ...book, shelf: newShelf } : book
      )
    );
  };

  return (
    <Routes>
      <Route
        exact
        path='/'
        element={
          <Bookshelf bookshelfData={bookshelfData} updateBookState={updateBookState} />
        }
      />
      <Route
        path='/search'
        element={
          <BookSearch data={bookshelfData} updateBookState={updateBookState} />
        }
      />
    </Routes>
  );
}

export default App;