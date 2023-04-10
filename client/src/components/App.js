import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import OnePlace from "./OnePlace"
import NewPlace from "./NewPlace";
import UpdatePlace from "./UpdatePlace"

import { fetchPlaces } from "../redux/placesReducer";
import { fetchUser } from "../redux/userReducer"

function App() {
  const { loading, user }  = useSelector(state => state.user)
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = 'Noteworthy Places';
  }, []);

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  useEffect(() => {
    if (user) dispatch(fetchPlaces())
  }, [dispatch, user])

  if (loading) return "Loading...";
  if (!user) return <Login />;

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="places/:id" element={<OnePlace />} />
        <Route path="/places/:id/edit" element={<UpdatePlace />}/>
        <Route path="/places/new" element={<NewPlace />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;