import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "../pages/Home";
import OnePlace from "../pages/OnePlace";
import UpdatePlace from "../pages/UpdatePlace";
import NewPlace from "../pages/NewPlace";

function App() {

// if (!user) return <Login onLogin={setUser} />;

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places/:id" element={<OnePlace />} />
        <Route path="/places/:id/edit" element={<UpdatePlace />}/>
        <Route path="/places/new" element={<NewPlace />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;