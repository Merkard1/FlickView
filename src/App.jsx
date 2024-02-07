import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Details, Footer, Header, Movies, Shows, Search } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/movie-details/:id" element={<Details type="movie" />} />
        <Route path="/tv-details/:id" element={<Details type="tv" />} />
        <Route path="/search/:type/:id" element={<Search />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
