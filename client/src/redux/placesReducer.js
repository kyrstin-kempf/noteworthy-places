// create and read activities

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
        case "places/deletePlace":
            // return { ...state, places: state.places.filter(p => p.id !== action.payload), loading: false };
            return { ...state, places: state.places.filter(p => p.id.toString() !== action.payload ) };
        case "places/filterByActivity":
            let actId = action.payload;
            let filteredPlaces = state.places.filter(p => {
                return p.activity_id === (actId)
            });
            return { ...state, places: filteredPlaces };
        case "places/clearFilter":
           return { ...state, places: [...state.places] };
        default:
            return state;
    }
}

export default placesReducer;