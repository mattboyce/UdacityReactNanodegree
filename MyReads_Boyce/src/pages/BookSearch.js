import React, { useState } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import { ShelfSelect } from '../components/ShelfSelect';
import { Shelves } from '../constants/Shelves';

export const BookSearch = (data, updateBookState) => {

  const [query, setQuery] = useState('');

  const updateQuery = (query) => {
    setQuery(query);
  };

  const AddBooksToResults = (props) => {

    console.log('333');
    console.log(props);

    if (query === '') {
      return (<> </>);
    }

    const books = props.data.data.filter((book) => book.title.toLowerCase().includes(query.toLowerCase()));

    console.log(query);
    console.log(books);

    return books.map((book) => (
      <li key={book.id} className='bookListItem'>
        <div className='book'>
          <div className='book-top'>
            <div
              className='book-cover'
              style={{
                width: 120,
                height: 190,
                backgroundImage: `url(${book.imageLinks.thumbnail})`,
              }}
            ></div>
            <div className='book-shelf-changer'>
              <ShelfSelect bookId={book.id} updateBookState={props.data.updateBookState} />
            </div>
          </div>
          <div className='book-title'>{book.title}</div>
          <div className='book-authors'>{book.authors[0]}</div>
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
            desiredState={Shelves.current.state}
            updateBookState={updateBookState}
          />
        </ol>
      </div>
    </div>
  );
};

BookSearch.propTypes = {
  data: PropTypes.array.isRequired,
  updateBookState: PropTypes.func.isRequired,
};
