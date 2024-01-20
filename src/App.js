import React from "react"

//LINK - packages
import "bootstrap/dist/css/bootstrap.min.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"

//LINK - project components
import {
  Home,
  AllItems,
  Dresses,
  Seasonal,
  Denims,
  Tshirts,
  Top,
  Cart,
  Detail,
} from "./layouts/layouts"

function App() {
  return (
    <Router>
      <div
        className="App"
        style={{ fontFamily: "DM Sans", backgroundColor: "#DDD0C8" }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/all-items" element={<AllItems />} />
          <Route path="/dresses" element={<Dresses />} />
          <Route path="/seasonal" element={<Seasonal />} />
          <Route path="denims" element={<Denims />} />
          <Route path="/t-shirts" element={<Tshirts />} />
          <Route path="/tops" element={<Top />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
