const initialState = {
    reservedPlaces: [],
    places: [],
    loading: false,
}

export function fetchPlaces() {
    return function (dispatch) {
      dispatch({ type: "places/placesLoading" });
      fetch("/places")
        .then((response) => response.json())
        .then((places) => {
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
            return { reservedPlaces: action.payload, places: action.payload, loading: false };
        case "places/addNewPlace":
            return { ...state, reservedPlaces: [...state.reservedPlaces, action.payload], places: [...state.places, action.payload], loading: false };
        case "places/updatePlace":
            let placeId = action.payload.id
            let newPlaces = state.places.map(p => {
                if(p.id === placeId) {
                    return action.payload
                } return p
            })
            return {...state, reservedPlaces: newPlaces, places: newPlaces }
        case "places/deletePlace":
            return { ...state, places: state.places.filter(p => p.id.toString() !== action.payload), reservedPlaces: state.reservedPlaces.filter(p => p.id.toString() !== action.payload) };
        case "places/searchByCity":
            let searchedValue = action.payload.toLowerCase();
            if (searchedValue === '') {
                return { ...state, places: state.reservedPlaces }
            } else {
                    let filteredCities = state.places.filter(p => {
                    return p.region.city.toLowerCase().includes(searchedValue)
                });
                return { ...state, places: filteredCities }
            }
        case "places/filterByActivity":
            let actId = action.payload;
            let filteredPlaces = state.places.filter(p => p.activity.id.toString() === actId);
            return { ...state, places: filteredPlaces }
        case "places/clearFilter":
           return { ...state, places: state.reservedPlaces };
        default:
            return state;
    }
}

export default placesReducer;