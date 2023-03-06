// action types
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// an empty array as the initial state
const initialState = {
  booksArray: [],
};
// Reducer
const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state, action.book],
      };
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.bookId),
      };
    default:
      return state;
  }
};
// Action creators
const AddBook = (book) => ({
  type: ADD_BOOK,
  book,
});

const RemoveBook = (bookId) => ({
  type: REMOVE_BOOK,
  bookId,
});

export { BookReducer, AddBook, RemoveBook };
