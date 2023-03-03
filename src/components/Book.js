import React from 'react';
import styles from '../styles/Book.module.css';

const Book = (obj) => {
  const { title, author } = obj;

  return (
    <div className="card">
      <div className="card-1">
        <p className="book-action">Action</p>
        <p className="book-title">{title}</p>
        <p className="book-author">{author}</p>
        <div className="activities">
          <p>Comments</p>
          <hr />
          <p>Remove</p>
          <hr />
          <p>Edit</p>
        </div>
      </div>
      <div className="card-2">
        <p className="percentage">64%</p>
        <p className="complete">Completed</p>
      </div>
      <div className="hr" />
      <div className="card-3">
        <p style={{ opacity: 0.5, fontSize: '13px' }}>CURRENT CHAPTER</p>
        <p style={{ textTransform: 'uppercase' }} className="chapter">chapter 17</p>
        <button type="button" style={{ textTransform: 'uppercase' }} className={styles.bookupdate}>Update Progress   </button>
      </div>
    </div>
  );
};
export default Book;
