import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Contant from "./Contant";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Contant />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;