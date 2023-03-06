const CHECK_STATUS = 'BOOKSTORE/category/CHECK_STATUS';

// initial state
const initialState = {
    categories: [],
  };
// Recucer FUnction

const categoryReducer = (state = initialState.state,action) => {
    switch (action.type) {
        case CHECK_STATUS:
            return 'Under construction';
            default:
                state;
    }
};

export default categoryReducer;
export { checkStatusRed };