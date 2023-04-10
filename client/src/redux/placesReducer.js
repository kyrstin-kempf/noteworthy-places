const initialState = {
    places: [],
    loading: false,
}

export function fetchPlaces() {
    return function (dispatch) {
      dispatch({ type: "places/placesLoading" });
      fetch("/places")
        .then((response) => response.json())
        .then((places) => {
            // console.log('data', data)
            dispatch({
                type: "places/placesLoaded",
                payload: places,
            })
            }
        );
    };
  }

function placesReducer(state = initialState, action) {
    switch (action.type) {
        case "places/placesLoading":
            return { ...state, loading: true }
        case "places/placesLoaded":
            return { places: action.payload, loading: false };
        case "places/addNewPlace":
            return { ...state, places: [...state.places, action.payload], loading: false };
            // return { ...state, isLoggedIn: !!payload, user: payload, loading: false };
        default:
            return state;
    }
}

export default placesReducer;