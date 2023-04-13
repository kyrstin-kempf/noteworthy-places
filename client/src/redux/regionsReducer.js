const initialState = {
    reservedRegions: [],
    regions: [],
    loading: false,
}

export function fetchRegions() {
    return function (dispatch) {
      dispatch({ type: "places/placesLoading" });
      fetch("/regions")
        .then((response) => response.json())
        .then((regions) => {
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
            return { reservedRegions: action.payload, regions: action.payload, loading: false };
        case "regions/deleteRegion":
            return { reservedRegions: action.payload, regions: action.payload, loading: false };
        case "regions/addRegion":
            return { ...state, reservedRegions: [...state.reservedRegions, action.payload] , regions: [...state.regions, action.payload] };
        case "regions/searchByCity":
            let searchedValue = action.payload.toLowerCase();
            if (searchedValue === '') {
                return { ...state, regions: state.reservedRegions }
            } else {
                    let filteredCities = state.regions.filter(r => {
                    return r.city.toLowerCase().includes(searchedValue)
                });
                return { ...state, regions: filteredCities }
            }
        default:
            return state;
    }
}

export default regionsReducer;