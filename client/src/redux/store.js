import { configureStore } from '@reduxjs/toolkit';

import userReducer from './userReducer';
import regionsReducer from './regionsReducer';
import placesReducer from './placesReducer'
import activitiesReducer from './activitiesReducer';

const store = configureStore({
    reducer: {
		user: userReducer,
		places: placesReducer,
		regions: regionsReducer,
		activities: activitiesReducer,
	},
});

export default store;