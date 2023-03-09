import { createAsyncThunk } from "@reduxjs/toolkit";

const APIID = 'XiaYGiqqbyc8T2fksKKK';
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApiapps/${APIKEY}/books/';

export const getBookData = createAsyncThunk('book/getBookData', async() => {
    try {
        return fetch(URL)
        .then((res) => res.json());
    }catch(error){
        return error;
    }
})