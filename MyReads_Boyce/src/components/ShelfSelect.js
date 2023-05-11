import React from 'react';
import PropTypes from 'prop-types';

export const ShelfSelect = (props) => {
    const componentId = props.bookId + '_select';

    return (
        <select id={componentId} onChange={(e) => props.updateBookState(props.bookId, e.target.value)} >
            <option value='none'>
                Move to...
            </option>
            <option value='currentlyReading'>Currently Reading</option>
            <option value='wantToRead'>Want to Read</option>
            <option value='read'>Read</option>
            <option value='none'>None</option>
        </select>
    );
};

ShelfSelect.propTypes = {
    bookId: PropTypes.string,
    updateBookState: PropTypes.func.isRequired,
};