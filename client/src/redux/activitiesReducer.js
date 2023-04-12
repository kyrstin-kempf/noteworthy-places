const initialState = {
    activities: [],
    loading: false,
}

export function fetchActivities() {
    return function (dispatch) {
      dispatch({ type: "activities/activitiesLoading" });
      fetch("/activities")
        .then((response) => response.json())
        .then((activities) => {
            // console.log('data', activities)
            dispatch({
                type: "activities/activitiesLoaded",
                payload: activities,
            })
            }
        );
    };
  }

function activitiesReducer(state = initialState, action) {
    switch (action.type) {
        case "activities/activitiesLoading":
            return { ...state, loading: true }
        case "activities/activitiesLoaded":
            return { activities: action.payload, loading: false };
        case "activities/addActivity":
            return { ...state, activities: [...state.activities, action.payload] };
        default:
            return state;
    }
}

export default activitiesReducer;