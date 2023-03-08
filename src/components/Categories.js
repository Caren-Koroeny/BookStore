import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/Categories.module.css';
import { checkStatus } from '../redux/categories/categorieSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((store) => store.category);
  return (
    <div style={{ margin: 'auto' }}>
      <button type="button" className={styles.categoriesUpdate} onClick={() => dispatch(checkStatus())}>Check Status</button>
      <span>{categories}</span>
    </div>
  );
};
export default Categories;
