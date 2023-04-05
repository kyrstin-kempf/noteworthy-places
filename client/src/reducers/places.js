import * as actions from '../actions/placesActions'

export const initialState = {
    places: [],
    loading: false,
    hasErrors: false,
}

export default function placesReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_PLACES:
            return { ...state, loading: true }
        case actions.GET_PLACES_SUCCESS:
            return { places: action.payload, loading: false, hasErrors: false }
        case actions.GET_PLACES_FAILURE:
            return { ...state, loading: false, hasErrors: true }
        default:
            return state
    }
}