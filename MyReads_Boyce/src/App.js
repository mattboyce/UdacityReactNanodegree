import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import * as dataApi from './BooksAPI';
import { Bookshelf } from './pages/Bookshelf';
import { BookSearch } from './pages/BookSearch';

function App() {
  const [bookshelfData, setBookshelfData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const getShelfBooks = async () => {
      const response = await dataApi.getAll();
      setBookshelfData(response);
    };

    getShelfBooks();
  }, []);

  const searchBooks = async (query) => {
    if (query.length > 0) {
      const response = await dataApi.search(query);
      setSearchResults(response);
    }
    else {
      setSearchResults('');
    }
  };

  const updateBookState = async (bookId, newShelf) => {
    dataApi.update(bookId, newShelf);

    if (!bookshelfData.find(book => book.id === bookId)) {
      const newBook = await dataApi.get(bookId);
      setBookshelfData(
        ...bookshelfData,
        newBook
      );
    }
    else {
      setBookshelfData(
        bookshelfData.map((book) =>
          book.id === bookId ? { ...book, shelf: newShelf } : book
        )
      );
    }
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
          <BookSearch bookshelfData={bookshelfData} data={searchResults} updateBookState={updateBookState} searchBooks={searchBooks} />
        }
      />
    </Routes>
  );
}

export default App;