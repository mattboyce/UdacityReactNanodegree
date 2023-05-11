import React from 'react';
import PropTypes from 'prop-types';
import { ShelfSelect } from '../components/ShelfSelect';
import { Shelves } from '../constants/Shelves';

const AssignBooksToShelves = (data) => {
  const currentShelfBooks = data.data.bookshelfData.filter((book) => book.shelf === data.desiredState);

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
            <ShelfSelect />
          </div>
        </div>
        <div className='book-title'>{book.title}</div>
        <div className='book-authors'>{book.authors[0]}</div>
      </div>
    </li>
  ));
};

export const Bookshelf = (data, updateBookState) => {
  return (
    <div id='wrapper'>
      <div id='current'>
      <h2>Currently Reading</h2>
        <ol className='books-grid'>
          <AssignBooksToShelves
            data={data}
            desiredState={Shelves.current.state}
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

Bookshelf.propTypes = {
  data: PropTypes.array.isRequired,
  updateBookState: PropTypes.func.isRequired,
};

/*    <div className='book'>
      <div className='book-top'>
        <div
          className='book-cover'
          style={{
            width: 128,
            height: 193,
            backgroundImage:
              'url("http:books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
          }}
        ></div>
        <div className='book-shelf-changer'>
          <select>
            <option value='none' disabled>
              Move to...
            </option>
            <option value='currentlyReading'>Currently Reading</option>
            <option value='wantToRead'>Want to Read</option>
            <option value='read'>Read</option>
            <option value='none'>None</option>
          </select>
        </div>
      </div>
      <div className='book-title'>To Kill a Mockingbird</div>
      <div className='book-authors'>Harper Lee</div>
    </div>*/
