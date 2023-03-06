import { configureStore } from "@reduxjs/toolkit";
import { BookReducer } from "./books/bookSlice";
import categoryReducer from "./categories/categorieSlice";

const store = configureStore({
    reducer:{
        books: BookReducer,
        categories: categoryReducer,
    },
});
export default store;