import React, { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import styles from '../styles/AddBook.module.css';
import { AddBooks, postBooks } from '../redux/books/bookSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

 
  const DisplayBook = () => {
    if (title !== '' && author !== '') {
      dispatch(postBooks({
        title,
        author,
        category: '',
      }));
      dispatch(AddBooks({
        item_id: nanoid(), title, author, category: '',
      }));
      console.log('Hello');
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <>
      <form>
        <h1 className="book-label" style={{ color: '#888888' }}> ADD NEW BOOK</h1>
        <div className={styles.form}>
          <input
            className={styles.inputstyle}
            id="book-title"
            type="text"
            name="book-title"
            required
            placeholder="Book title"
            value={title}
            onChange={handleTitleChange}
          />
          <input
            className={styles.inputstyle}
            id="book-author"
            type="text"
            name="book-author"
            required
            placeholder="Author"
            value={author}
            onChange={handleAuthorChange}
          />
          <button
            style={{
              color: '#fff', border: 'none', padding: '0 30px', background: '#0290FF', borderRadius: '5px', cursor: 'pointer',
            }}
            type="button"
            className="pointer"
            onClick={() => {
              DisplayBook();
            }}
          >
            Add Books
          </button>
        </div>
      </form>
    </>
  );
};

export default AddBook;
