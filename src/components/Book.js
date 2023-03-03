import React from "react";
import styles from '../styles/Book.module.css';

const Book = (obj) => {
    const { title, author } = obj;

    return (
        <div>
        <div className="card-1">
        <p>Action</p>
        <p>{title}</p>
        <p>{author}</p>
        <div>
        <p>Comments</p>
        <p>Remove</p>
        <p>Edit</p>
        </div>
        </div>
        <div className="card-2">
        <p>64%</p>
        <p>Completed</p>
        </div>
        <div className="card-3">
        <p style={{textTransform: "uppercase"}} className="chapter">chapter 17</p>
        <button type="button" style={{textTransform: "uppercase"}} className={styles.bookupdate} >Update Progress   </button>
        </div>
        </div>
    );
};
export default Book;
