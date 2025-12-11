import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import MovieDetail from "./pages/MovieDetail"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contacts" element={<Contact />}></Route>
            <Route path="/movies/:id" element={<MovieDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
