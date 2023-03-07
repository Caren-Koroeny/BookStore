import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import styles from '../styles/AddBook.module.css';
import { AddBooks } from '../redux/books/bookSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const DisplayBook = () => {
    const titleInput = document.getElementById('book-title');
    const authorInput = document.getElementById('book-author');

    const title = titleInput.value;
    const author = authorInput.value;

    if (title !== '' && author !== '') {
      dispatch(AddBooks({ id: uuidv4(), title, author }));
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
          />
          <input
            className={styles.inputstyle}
            id="book-author"
            type="text"
            name="book-author"
            required
            placeholder="Author"
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
            Add Book
          </button>
        </div>
      </form>
    </>
  );
};

export default AddBook;
