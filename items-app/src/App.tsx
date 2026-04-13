import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Items from "./pages/Items"
import Item from "./pages/Item"

function App() {

return (
  <BrowserRouter>

    <Header />

      <main className="p-6">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/items/:id" element={<Item />} />
      </Routes>

  </main>

  <Footer />

</BrowserRouter>
  )
}

export default App
