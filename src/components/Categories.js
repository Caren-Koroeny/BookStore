import React from 'react';
import { useDispatch } from 'react-redux';
import styles from '../styles/Categories.module.css';
import { checkStatus } from '../redux/categories/categorieSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const { Categories } = useDispatch((store) => store.Categories);
  return (
    <div className="container">
      <button type="button" className={styles.categoriesUpdate} onClick={() => dispatch(checkStatus())}>Check status</button>
      <span>{Categories}</span>
    </div>
  );
};

export default Categories;
