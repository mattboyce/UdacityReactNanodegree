import React from 'react';
import PropTypes from 'prop-types';

export const ShelfSelect = (props) => {
    const componentId = props.bookId + '_select';
    const bookInShelf = props.bookshelfData.find(book => book.id === props.bookId);
    const currentShelf = bookInShelf !== undefined ? bookInShelf.shelf : 'none';

    return (
        <select id={componentId} defaultValue={currentShelf} onChange={(e) => props.updateBookState(props.bookId, e.target.value)} >
            <option value='move' disabled={true}>
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
    bookshelfData: PropTypes.array.isRequired,
    updateBookState: PropTypes.func.isRequired,
};