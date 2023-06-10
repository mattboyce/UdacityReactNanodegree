import React from 'react';
import PropTypes from 'prop-types';

export const Username = (userName) => {

  return (
      <p>{userName.userName}</p>
  );
};

Username.propTypes = {
  userName: PropTypes.string.isRequired,
};
