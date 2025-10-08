import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./components/Header"
import { Home } from "./components/Home"
import { Viewcart } from "./components/Viewcart"
import './App.css'
import { createContext, useState } from "react"

export const cartContext = createContext()

function App() {
  const [cart, setCart] = useState([])

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<Viewcart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </cartContext.Provider>
  )
}

export default App
