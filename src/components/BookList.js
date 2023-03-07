import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from './AddNewBook';
import Book from './Book';

// const BookDetails = {
//   id: 1,
//   title: 'Kidagaa kimemwozea',
//   author: 'Ken Walibora',
// };

const BookList = () => {
  const { booksArray } = useSelector((store) => store.books);
  return (
    <div className="book-holder" style={{ backgroundcolor: '#fff', padding: '4px' }}>
      {
      booksArray.map((books) => (
        <Book
          key={books.id}
          title={books.title}
          author={books.author}
        />
      ))
    }
      <hr className="horiz-break" />
      <AddBook />

    </div>
  );
};
export default BookList;
