const initialState = {
    regions: [],
    loading: false,
}

export function fetchPlaces() {
    return function (dispatch) {
      dispatch({ type: "data/dataLoading" });
      fetch("/places")
        .then((response) => response.json())
        .then((data) =>   {
            // console.log('data', data)
            dispatch({
                type: "data/dataLoaded",
                payload: data,
            })
            }
        );
    };
  }

function placesReducer(state = initialState, action) {
    switch (action.type) {
        case "data/dataLoading":
            return { ...state, loading: true }
        case "data/dataLoaded":
            return { regions: action.payload, loading: false };
        default:
            return state;
    }
}

export default placesReducer;