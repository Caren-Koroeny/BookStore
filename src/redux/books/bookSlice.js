/* eslint-disable no-param-reassign */
import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/m6KbdydZiVrXkOzJH2Gv';

// get books from API
export const getBooksData = createAsyncThunk('books/getBooksData', async () => {
  const response = await axios(`${URL}/books`);
  return response.data;
});

// POST TO API
export const AddBooks = createAsyncThunk(
  'books/AddBooks',
  async (payload, thunkApi) => {
    try {
      const response = await axios.post(`${URL}/books`, {
        ...payload,
        item_id: nanoid(),
      });
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.data.message || 'something went wrong',
      );
    }
  },
);

// DELETE FROM API

export const RemoveBook = createAsyncThunk('books/RemoveBook', async (id) => {
  const response = await axios.delete(`${URL}/books/${id}`);
  return response.data;
});

const initialState = {
  booksArray: [],
  error: false,
};

let newBook;
const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    postBooks: (state, action) => {
      newBook = {
        item_id: nanoid(),
        title: action.payload.title,
        author: action.payload.author,
      };
      state.booksArray.push(newBook);
    },
    deleteBook: (state, { payload }) => {
      state.booksArray = state.booksArray.filter((books) => books.item_id !== payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBooksData.fulfilled, (state, action) => {
      const newBookArry = [];
      const resObj = action.payload;
      console.log('Hi');
      // eslint-disable-next-line no-restricted-syntax, guard-for-in
      for (const key in resObj) {
        const itemObj = resObj[key][0];
        itemObj.item_id = key;
        newBookArry.push(itemObj);
      }
      state.booksArray = newBookArry;
    });
    builder
      .addCase(AddBooks.fulfilled, (state) => {
        state.error = true;
      })
      .addCase(AddBooks.rejected, (state) => {
        state.error = false;
      });
  },
});

export const { postBooks, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;
