import React from 'react';
import { useSelector } from 'react-redux';
import AddNewBooks from './AddNewBook';
import Book from './Book';

const BookList = () => {
  const { booksArray } = useSelector((store) => store.books);
  return (
    <div className="book-holder" style={{ backgroundcolor: '#fff', padding: '4px' }}>
      {
      booksArray.map((books) => (
        <Book
          key={books.item_id}
          title={books.title}
          author={books.author}
          id={books.item_id}
        />
      ))
    }
      <hr className="horiz-break" />
      <AddNewBooks />

    </div>
  );
};

export default BookList;
