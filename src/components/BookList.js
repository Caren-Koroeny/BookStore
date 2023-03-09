import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddBook from './AddNewBook';
import { getBooksData } from '../redux/books/bookSlice';
import Book from './Book';

const BookList = () => {
  const dispatch = useDispatch();
  const { booksArray } = useSelector((store) => store.books);
  useEffect(() => {
    dispatch(getBooksData());
  }, [dispatch]);
  console.log('booksArray:', booksArray);
  return (
    <div className="book-holder" style={{ backgroundcolor: '#fff', padding: '4px' }}>
      {booksArray && booksArray.map((books) => {
        if (books && books.title) {
          return (
            <Book
              key={books.item_id}
              title={books.title}
              author={books.author}
              id={books.item_id}
            />
          );
        }
        return null;
      })}
      <hr className="horiz-break" />
      <AddBook />

    </div>
  );
};

export default BookList;
