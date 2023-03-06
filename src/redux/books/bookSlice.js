// an empty array as the initial state
const initialState = {
    booksArray : [],
}

// then define a reducer function that handles actions that modify the book state

const bookReducer = (state = initialState, action ) => {
    switch(action.type){
        // Handle actions that modify the book state

        default:
            return state;
    }
}

//  create a Redux store 
const store = createStore(bookReducer)

