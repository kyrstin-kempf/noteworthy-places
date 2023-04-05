import * as actions from '../actions/regionsAction'

export const initialState = {
    regions: [],
    loading: false,
    hasErrors: false,
}

export default function regionsReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_REGIONS:
            return { ...state, loading: true }
        case actions.GET_REGIONS_SUCCESS:
            return { regions: action.payload, loading: false, hasErrors: false }
        case actions.GET_REGIONS_FAILURE:
            return { ...state, loading: false, hasErrors: true }
        default:
            return state
    }
}