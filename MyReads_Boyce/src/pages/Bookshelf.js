import React from 'react';
import PropTypes from 'prop-types';

export const Bookshelf = ({ data }) => {
  return (
    <div id='wrapper'>
      <div id='current'>data.current.map</div>
      <div id='want'></div>
      <div id='read'></div>
    </div>
  );
};

Bookshelf.propTypes = {
  data: PropTypes.array.isRequired,
  updateBookState: PropTypes.func.isRequired,
};
