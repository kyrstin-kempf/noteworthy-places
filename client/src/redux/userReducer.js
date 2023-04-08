import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
  } from "../actions/loginActions";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };


export function fetchUser() {
    return function (dispatch) {
      dispatch({ type: "user/userLoading" });
      fetch("/me")
        .then((response) => response.json())
        .then((user) =>   {
            console.log('user', user)
            dispatch({
                type: "user/userLoaded",
                payload: user,
            })
            }
        );
    };
}

// export function loginUser(e) {
//     e.preventDefault();
//     dispatch({ type: "user/loginLoading" })
//     // setIsLoading(true);
//     fetch("/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password }),
//     })
//       .then((r) => {
//         // setIsLoading(false);
//         // dispatch({ type: "user/loggedIn" })
//         if (r.ok) {
//         //   r.json().then((user) => onLogin(user));
//           r.json().then((user) => dispatch({ type: 'user/loggedIn', payload: user}));
//         } else {
//           r.json().then((err) => setErrors(err.errors));
//         }
//       });
//   }

function userReducer(state = initialState, action) {
    const { type, payload } = action; 

    switch (type) {        
        case REGISTER_SUCCESS:
            return { ...state, isLoggedIn: false }
        case REGISTER_FAIL:
            return { ...state, isLoggedIn: false };
        case LOGIN_SUCCESS:
            return { ...state, isLoggedIn: true, user: payload.user };
        case LOGIN_FAIL:
            return { ...state, isLoggedIn: false, user: null };
        case LOGOUT:
            return { ...state, isLoggedIn: false, user: null };
        default:
            return state;
    }
}

export default userReducer;