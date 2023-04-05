export const increment = (num) => {
    return {
        type: 'count/increment',
        payload: num
    };
};

export const decrement = () => {
    return {
        type: 'count/decrement'
    };
};

export const greet = () => {
    return {
        type: 'toggle/show'
    };
}