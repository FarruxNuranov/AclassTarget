import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import HomeAlt from './pages/HomeAlt.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/v2" element={<HomeAlt />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
