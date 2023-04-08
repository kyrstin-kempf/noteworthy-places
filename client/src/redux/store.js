import { configureStore } from '@reduxjs/toolkit';

import userReducer from './userReducer';
import placesReducer from './placesReducer'

const store = configureStore({
    reducer: {
		user: userReducer,
		data: placesReducer,
	},
});

export default store;