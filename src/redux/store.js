import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './books/bookSlice';
import categorieSlice from './categories/categorieSlice';

const store = configureStore({
  reducer: {
    books: bookSlice,
    category: categorieSlice,
  },
});

export default store;
