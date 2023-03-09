/* eslint-disable no-param-reassign */
import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import { async } from 'q';


const URL = 
  "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/m6KbdydZiVrXkOzJH2Gv";
  
  // get books from API
  export const getBooksData = createAsyncThunk("books/getBooksData", async () => {
    const response =  await axios(`${URL}/books`);
    return response.data;

  });

  // POST TO API
  export const AddBooks = createAsyncThunk(
    "books/AddBooks",
    async (payload, thunkApi) => {
      try {
        const response = await axios.post(`${URL}/books`, {
          ...payload,
          item_id: nanoid(),
        });
  
        return response.data;
      } catch (error) {
        return thunkApi.rejectWithValue(
          error.data.message || "something went wrong"
        );
      }
    }
  );

  // DELETE FROM API

  export const RemoveBook =  createAsyncThunk("books/RemoveBook", async (id) =>{
    const response = await axios.delete(`${URL}/books/${id}`);
    return response.data;
  });

  const initialState = {
  booksArray:[],
  error:false,
  };

  let newBook;
  const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    AddBooks: (state, action) => {
      const newBook = {
        item_id: nanoid(),
        title: action.payload.title,
        author: action.payload.author,
      };
      return {
        ...state,
        booksArray: [...state.booksArray, newBook],
      };
    },
    RemoveBook: (state, { payload }) => {
      state.booksArray = state.booksArray.filter((books) => books.item_id !== payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBooksData.fulfilled, (state, action))
  }
});

// const initialState = {
//   booksArray:
//   // Initial state:
//   [
//     {
//       item_id: '1',
//       title: 'The Great Gatsby',
//       author: 'John Smith',
//       category: 'Fiction',
//     },
//     {
//       item_id: '2',
//       title: 'Anna Karenina',
//       author: 'Leo Tolstoy',
//       category: 'Fiction',
//     },
//     {
//       item_id: '3',
//       title: 'The Selfish Gene',
//       author: 'Richard Dawkins',
//       category: 'Nonfiction',
//     },
//   ],
// };
// const bookSlice = createSlice({
//   name: 'books',
//   initialState,
//   reducers: {
//     AddBooks: (state, action) => {
//       const newBook = {
//         item_id: nanoid(),
//         title: action.payload.title,
//         author: action.payload.author,
//       };
//       return {
//         ...state,
//         booksArray: [...state.booksArray, newBook],
//       };
//     },
//     RemoveBook: (state, { payload }) => {
//       state.booksArray = state.booksArray.filter((books) => books.item_id !== payload);
//     },

//   },
// });

// export const { AddBooks, RemoveBook } = bookSlice.actions;

export default bookSlice.reducer;
