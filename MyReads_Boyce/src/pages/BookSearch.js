import React from 'react';
import PropTypes from 'prop-types'

export const BookSearch = ({ data }) => {
  return (
    <div id='wrapper'>
      <div id='search'></div>
      <div id='books'></div>
    </div>
  );
};

BookSearch.propTypes = {
  data: PropTypes.array.isRequired,
  updateBookState: PropTypes.func.isRequired,
};
