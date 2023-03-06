// action types
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// an empty array as the initial state
const initialState = {
    booksArray : [],
}
// Reducer
const bookReducer = (state = initialState, action ) => {
    switch(action.type){
        case ADD_BOOK:
            return{
                ...state,
                books: [...state, action.book]
            };
        
        default:
            return state;
    }
}

// Action creators
const addBook = book => ({
    type: ADD_BOOK,
    book
});

const removeBook = bookId => ({
    type: REMOVE_BOOK,
    bookId
});

//  create a Redux store 
const store = createStore(bookReducer)

