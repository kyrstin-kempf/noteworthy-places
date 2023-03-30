// Action Creators
export const addPlace = (place) => {
    return {
      type: "places/add",
      payload: place,
    };
  };
  
  export const removePlace = (id) => {
    return {
      type: "places/remove",
      payload: id,
    };
  };
  
  // Reducers
  const initialState = [];
  
  export default function placesReducer(state = initialState, action) {
    switch (action.type) {
      case "places/add":
        return [...state, action.payload];
  
      case "places/remove":
        return state.filter((author) => place.id !== action.payload);
  
      case "regions/add":
        const existingPlace = state.find(
          (place) => place.name === action.payload.name
        );
        if (existingPlace) {
          return state;
        } else {
          return [
            ...state,
            { name: action.payload.name, id: id },
          ];
        }
  
      default:
        return state;
    }
  }