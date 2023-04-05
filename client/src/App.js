import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import OnePlace from "./components/OnePlace";
import UpdatePlace from "./components/UpdatePlace";
import NewPlace from "./components/NewPlace";

// import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    document.title = 'Noteworthy Places';
  }, []);

  useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

if (!user) return <Login onLogin={setUser} />;

  return (
    <BrowserRouter>
      <NavBar setUser={setUser} />
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