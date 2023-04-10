const initialState = { isLoggedIn: false, user: null, loading: true };

export function fetchUser() {
    return function (dispatch) {
      dispatch({ type: "user/userLoading" });
      fetch("/me")
        .then((r) => {
            if (r.ok) {
                r.json().then((user) => {                 
                  dispatch({ type: "user/userLoaded", payload: user })
                });
              } else {
                dispatch({ type: "user/userLoaded", payload: null })
              }
        })
    };
}

function userReducer(state = initialState, action) {
    const { type, payload } = action; 

    switch (type) {        
        case "user/userLoading":
            return { ...state, isLoggedIn: false, loading: true }
        case "user/userLoaded":
            return { ...state, isLoggedIn: !!payload, user: payload, loading: false };
        case "user/userLoggedOut":
            return { ...state, isLoggedIn: false, user: null };
        default:
            return state;
    }
}

export default userReducer;