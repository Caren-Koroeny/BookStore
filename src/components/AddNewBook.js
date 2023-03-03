import React from "react";
import styles from '../styles/AddBook.module.css';

const AddBook = () => (

    <>
    <form>
    <label> ADD NEW BOOK</label>
    <div className={styles.form}>
    <input
        className={styles.inputstyle}
        id="book-id"
        type="text"
        name="book-title"
        required
        placeholder="Book title"
    />
    <input
        className={styles.inputstyle}
        type="text"
        name="book-author"
        required
        placeholder="Author"
    />
    <button
    style={{
        color: '#fff', border: 'none', padding: '0 30px', background: '#0290FF', borderRadius: '5px', cursor: 'pointer',
    }}
    type="Submit"
    >
    Add Book
    </button>
    </div>
    </form>
    </>
);

export default AddBook;