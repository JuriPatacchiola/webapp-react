import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { LoaderProvider } from "./context/LoaderContext";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <LoaderProvider> {/* <- avvolge tutto */}
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LoaderProvider>
  );
}

export default App;
