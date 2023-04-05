import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    loading: false,
    hasErrors: false,
    user: [],
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUser: (state) => {
            state.loading = true  
        },
        getUserSuccess: (state, { payload }) => {
            state.user = payload
            state.loading = false 
            state.hasErrors = false 
        },
        getUserFailure: (state) => {
            state.loading = false
            state.hasErrors = true 
        },
    },
});

export const { getUser, getUserSuccess, getUserFailure } = userSlice.actions;

export const userSelector = (state) => state.user

export default userSlice.reducer;

export function fetchUser() {
    return async (dispatch) => {
        dispatch(getUser())
    
        try {
            const response = await fetch('/me')
            const data = await response.json()

            dispatch(getUserSuccess(data))
        } catch (error) {
            dispatch(getUserFailure())
        }
    }
}