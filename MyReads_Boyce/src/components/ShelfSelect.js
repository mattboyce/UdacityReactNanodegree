import React from 'react';
import PropTypes from 'prop-types';

export const ShelfSelect = (props) => {
    const componentId = props.bookId + '_select';
    const bookInShelf = props.bookshelfData.find(book => book.id === props.bookId);
    const currentShelf = bookInShelf !== undefined ? bookInShelf.shelf : undefined;

    return (
        <select id={componentId} onChange={(e) => props.updateBookState(props.bookId, e.target.value)} >
            <option value='none' disabled={true}>
                Move to...
            </option>
            <option value='currentlyReading' selected={currentShelf === 'currentlyReading' ? true : false} >Currently Reading</option>
            <option value='wantToRead' selected={currentShelf === 'wantToRead' ? true : false}>Want to Read</option>
            <option value='read' selected={currentShelf === 'read' ? true : false}>Read</option>
            <option value='none' selected={currentShelf === 'none' || undefined ? true : false}>None</option>
        </select>
    );
};

ShelfSelect.propTypes = {
    bookId: PropTypes.string,
    bookshelfData: PropTypes.array.isRequired,
    updateBookState: PropTypes.func.isRequired,
};