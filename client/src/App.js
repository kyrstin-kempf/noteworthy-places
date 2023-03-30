import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Test from "./pages/Test";
import React from "react";
import Counter from "./features/Counter"

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/testing" element={<Counter />}/>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;