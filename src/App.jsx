import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import HomeAlt from "./pages/HomeAlt.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/v2" element={<Home />} />
        <Route path="/" element={<HomeAlt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
