import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from './AddNewBook';
import Book from './Book';

const BookList = () => {
  const BookDetails = useSelector((state) => state.book);
  return (
    <div className="book-holder" style={{ backgroundcolor: '#fff', padding: '4px' }}>
      {BookDetails.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
        />
      ))}

      <hr className="horiz-break" />
      <AddBook />

    </div>
  );
};
export default BookList;
