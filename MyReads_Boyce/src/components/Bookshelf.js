import React, { useState, useEffect } from 'react';

export const Bookshelf = ({ data }) => {
  return (
    <div id='wrapper'>
      <div id='Search'></div>
      <div id='Current'>data.current.map</div>
      <div id='Want'></div>
      <div id='Read'></div>
    </div>
  );
};

Bookshelf.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.object({
      current: PropTypes.arrayOf({
        data: PropTypes.object,
      }),
      want: PropTypes.arrayOf({
        data: PropTypes.object,
      }),
      read: PropTypes.arrayOf({
        data: PropTypes.object,
      }),
    })
  ).isRequired,
};
