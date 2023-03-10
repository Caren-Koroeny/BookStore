import React from 'react';
import { useDispatch } from 'react-redux';
import styles from '../styles/Book.module.css';
import { RemoveBook, deleteBook } from '../redux/books/bookSlice';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();
  const onDeleteHandler = (e) => {
    const { id } = e.target.dataset;
    dispatch(RemoveBook(id));
    dispatch(deleteBook(id));
  };

  return (
    <li className={styles.book}>
      <div className={styles.details}>
        <span className={styles.category}>category</span>
        <h2>{title}</h2>
        <span className={styles.author}>{author}</span>
        <div className={styles.action}>
          <button type="button">Comments</button>
          <button type="button" className="add" data-id={id} onClick={onDeleteHandler}>
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="complete-graph">
        <div className="oval" />
        <div className="complete-percent">
          <span className="percentage">80%</span>
          <p className="completed">completed</p>
        </div>

        <div className={styles.chapter}>
          <h3>CURRENT CHAPTER</h3>
          <p>Chapter 17</p>
          <button type="button" className="btn">UPDATE PROGRESS</button>
        </div>
      </div>
    </li>

  );
};

export default Book;
