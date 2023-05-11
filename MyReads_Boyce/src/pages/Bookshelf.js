/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from "react-router-dom";
import { ShelfSelect } from '../components/ShelfSelect';
import { Shelves } from '../constants/Shelves';

const AssignBooksToShelves = (props) => {
  if (!Array.isArray(props.data.bookshelfData)) {
    return <></>
  }

  const currentShelfBooks = props.data.bookshelfData.filter((book) => book.shelf === props.desiredState);
  return currentShelfBooks.map((book) => (
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
            <ShelfSelect bookId={book.id} bookshelfData={props.data.bookshelfData} updateBookState={props.data.updateBookState} />
          </div>
        </div>
        <div className='book-title'>{book.title}</div>
        {book.authors.map((author) => (<div key={author} className='book-authors'>{author}</div>))}
      </div>
    </li>
  ));
};

export const Bookshelf = (data, updateBookState) => {
  return (
    <div id='wrapper'>
      <Link to="/search" className="search-books">
        Search Books
      </Link>
      <div id='current'>
        <h2>Currently Reading</h2>
        <ol className='books-grid'>
          <AssignBooksToShelves
            data={data}
            desiredState={Shelves.current.state}
            updateBookState={updateBookState}
          />
        </ol>
      </div>
      <div id='want'>
        <h2>Want to Read</h2>
        <ol className='books-grid'>
          <AssignBooksToShelves
            data={data}
            desiredState={Shelves.want.state}
          />
        </ol>
      </div>
      <div id='read'>
        <h2>Read</h2>
        <ol className='books-grid'>
          <AssignBooksToShelves
            data={data}
            desiredState={Shelves.read.state}
          />
        </ol>
      </div>
    </div>
  );
};