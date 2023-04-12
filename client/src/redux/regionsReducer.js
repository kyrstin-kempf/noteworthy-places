const initialState = {
    regions: [],
    allRegions: [],
    loading: false,
    // another
}

export function fetchRegions() {
    return function (dispatch) {
      dispatch({ type: "places/placesLoading" });
      fetch("/regions")
        .then((response) => response.json())
        .then((regions) => {
            // console.log('regions', regions)
            dispatch({
                type: "regions/regionsLoaded",
                payload: regions,
            })
            }
        );
    };
  }

function regionsReducer(state = initialState, action) {
    switch (action.type) {
        case "regions/regionsLoading":
            return { ...state, loading: true }
        case "regions/regionsLoaded":
            return { regions: action.payload, loading: false };
        case "regions/deleteRegion":
            return { regions: action.payload, loading: false };
        case "regions/addRegion":
            return { ...state, regions: [...state.regions, action.payload] };
        case "regions/searchByCity":
            // conditional payload = ''
            let searchedValue = action.payload;
            // determine if needs to be filtered -- if action.payload is '', state.regions, else, filter
            let filteredCities = state.regions.filter(r => {
                return r.city.toLowerCase().includes(searchedValue)
            });
            return {
                ...state,
                // only touching "untouched" array of regions
                filteredCities: filteredCities
            }
            // return {
            //     ...state,
            //     // only touching "untouched" array of regions
            //     regions: regions
            // }
        default:
            return state;
    }
}

export default regionsReducer;