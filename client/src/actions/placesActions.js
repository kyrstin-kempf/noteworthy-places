export const GET_PLACES = 'GET_PLACES'
export const GET_PLACES_SUCCESS = 'GET_PLACES_SUCCESS'
export const GET_PLACES_FAILURE = 'GET_PLACES_FAILURE'

export const getPlaces = () => ({
    type: GET_PLACES,
})

export const getPlacesSuccess = (places) => ({
    type: GET_PLACES_SUCCESS,
    payload: places,
})

export const getPlacesFailure = () => ({
    type: GET_PLACES_FAILURE,
})

export function fetchPlaces() {
    return async (dispatch) => {
        dispatch(getPlaces())

        try {
            const response = await fetch('/places')
            const data = await response.json()

            dispatch(getPlacesSuccess(data))
        } catch (error) {
            dispatch(getPlacesFailure())
        }
    }
}