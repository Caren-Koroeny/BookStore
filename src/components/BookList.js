import React from 'react';
import AddBook from './AddNewBook';
import Book from './Book';

const BookDetails = {
  id: 1,
  title: 'Kidagaa kimemwozea',
  author: 'Ken Walibora',
};

const BookList = () => (
  <div>
    <Book
      title={BookDetails.title}
      author={BookDetails.author}
    />
    <hr className="horiz-break" />
    <AddBook />

  </div>
);

export default BookList;
