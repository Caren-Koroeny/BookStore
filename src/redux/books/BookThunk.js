import { createAsyncThunk } from '@reduxjs/toolkit';

const APIKEY = 'XiaYGiqqbyc8T2fksKKK';
const URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApiapps/${APIKEY}/books/`;

export const getBookData = createAsyncThunk('book/getBookData', async () => {
  try {
    return fetch(URL)
      .then((res) => res.json());
  } catch (error) {
    return error;
  }
});

export const AddBook = createAsyncThunk('book/AddBook', async (data, thumkAPI) => {
  try {
    return fetch(URL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(() => data);
  } catch (error) {
    return thumkAPI.rejectWithValue('something went wrong');
  }
});

export const RemoveBook = createAsyncThunk('book/RemoveBook', async (id, thumkAPI) => {
  try {
    return fetch(URL + id, {
      method: 'DELETE',
      body: JSON.stringify({ item_id: id }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(() => id);
  } catch (error) {
    return thumkAPI.rejectWithValue('something went wrong!');
  }
});
