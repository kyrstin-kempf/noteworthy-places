const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case 'count/increment':
            return state + action.payload;
        case 'count/decrement':
            return state - 1;
        default:
            return state;
    }
};

export default counterReducer;