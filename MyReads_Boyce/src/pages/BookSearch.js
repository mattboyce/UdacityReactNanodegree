import React, { useState } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { ShelfSelect } from '../components/ShelfSelect';

export const BookSearch = ({ bookshelfData, data, updateBookState, searchBooks }) => {
  const [query, setQuery] = useState('');

  const updateQuery = (query) => {
    setQuery(query);
    searchBooks(query.toLowerCase());
  };

  const AddBooksToResults = (props) => {

    if (props.data.length === 0 || props.data[0].error) {
      return (<> </>);
    }

    return props.data.map((book) => (
      <li key={book.id} className='bookListItem'>
        <div className='book'>
          <div className='book-top'>
            <div
              className='book-cover'
              style={{
                width: 120,
                height: 190,
                backgroundImage: `url(${book.imageLinks !== undefined && book.imageLinks.thumbnail !== undefined ? book.imageLinks.thumbnail : ''})`,
              }}
            ></div>
            <div className='book-shelf-changer'>
              <ShelfSelect bookId={book.id} bookshelfData={bookshelfData} updateBookState={props.updateBookState} />
            </div>
          </div>
          <div className='book-title'>{book.title !== undefined ? book.title : ''}</div>
          {book.authors !== undefined ? book.authors.map((author) => (<div key={author} className='book-authors'>{author}</div>)) : ''}
        </div>
      </li>
    ));
  };

  return (
    <div id='wrapper'>
      <Link to="/" className="bookshelf">
        Bookshelf
      </Link>
      <div id='search'>
        <input
          className="search-books"
          type="text"
          placeholder="Search Books"
          value={query}
          onChange={(event) => updateQuery(event.target.value)}
        />
      </div>
      <div id='books'>
        <ol className='book-search-results'>
          <AddBooksToResults
            data={data}
            updateBookState={updateBookState}
            searchBooks={searchBooks}
          />
        </ol>
      </div>
    </div>
  );
};

BookSearch.propTypes = {
  bookshelfData: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  updateBookState: PropTypes.func.isRequired,
  searchBooks: PropTypes.func.isRequired,
};
