import { configureStore } from '@reduxjs/toolkit';
import { BookReducer } from './books/bookSlice';
import categorieSlice from './categories/categorieSlice';

const store = configureStore({
  reducer: {
    books: BookReducer,
    categories: categorieSlice,
  },
});
export default store;
