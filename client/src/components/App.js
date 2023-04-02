import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "../pages/Home";
import Test from "../pages/Test";
// import Counter from "./features/Counter"

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testing" element={<Test />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;