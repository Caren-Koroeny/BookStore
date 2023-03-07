import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from '../styles/AddBook.module.css';
import { AddBooks } from '../redux/books/bookSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim()) {
      dispatch(
        AddBooks({
          title,
          author,
          category: '',
        }),
      );

      // reset title and author
      setTitle('');
      setAuthor('');
      setErrorMessage('');
    } else {
      setErrorMessage('Book title and author can not be empty');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 className="book-label" style={{ color: '#888888' }}> ADD NEW BOOK</h1>
        <div className={styles.form}>
          <input
            className={styles.inputstyle}
            id="temp-id"
            type="text"
            name="book-title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Book title"
          />
          <input
            className={styles.inputstyle}
            type="text"
            name="book-author"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
          />
          <button
            style={{
              color: '#fff', border: 'none', padding: '0 30px', background: '#0290FF', borderRadius: '5px', cursor: 'pointer',
            }}
            type="submit"
            className="pointer"
          >
            Add Book
          </button>
          <span className="error">{errorMessage}</span>
        </div>
      </form>
    </>
  );
};

export default AddBook;
