const toggleGreetingReducer = (state = false, action) => {
    switch(action.type) {
        case 'toggle/show':
            return !state;
        default:
            return state;
    }
};

export default toggleGreetingReducer;