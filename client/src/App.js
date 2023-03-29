import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/testing" element={<Test />}/>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;