import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
// import UpdatePlace from "./components/UpdatePlace";
import NewPlace from "./components/NewPlace";

import { fetchPlaces } from "./redux/placesReducer";
// import { fetchUser } from "./redux/userReducer"

function App() {
  const [user, setUser] = useState('')
  // const user  = useSelector(state => state.user.user)
  const dispatch = useDispatch();

  // user -> use useSelector
  // setUser -> use dispatch  

  useEffect(() => {
    document.title = 'Noteworthy Places';
  }, []);

  useEffect(() => {
    dispatch(fetchPlaces())
  }, [dispatch])

  useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        // setUser
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  // useEffect(() => {
  //   dispatch(fetchUser())
  // }, [dispatch])

  // useEffect(() => {
  //   fetch('/me').then((response) => {
  //     if (response.ok) {
  //       response.json().then((user) => setUser(user));
  //     }
  //   });
  // }, [dispatch]);

  // useEffect(() => {
  //   fetch('/me').then((response) => {
  //     if (response.ok) {
  //       response.json().then(dispatch());
  //     }
  //   });
  // }, [dispatch]);

if (!user) return <Login onLogin={setUser}/>;

  return (
    <BrowserRouter>
      <NavBar setUser={setUser}/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/places/:id" element={<OnePlace />} /> */}
        {/* <Route path="/places/:id/edit" element={<UpdatePlace />}/> */}
        <Route path="/places/new" element={<NewPlace />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;