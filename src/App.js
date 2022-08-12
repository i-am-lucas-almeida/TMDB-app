import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";

import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import Genres from "./pages/Genres/Genres";
import Search from "./pages/Search/Search";
import MediaGenre from "./pages/Media/MediaGenre";
import Categories from "./pages/Categories/Categories";

export default function App() {

  return (

    <>

      <Router>

        <ScrollToTop />

        <NavBar />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/details/:type/:id/:name" element={<Details />} />
          <Route path="/search" element={<Search />} />
          <Route path="/genres/:type" element={<Genres />} />
          <Route path="/genres/:type/:name" element={<MediaGenre />} />
          <Route path="/category/:type/:category" element={<Categories />} />
          <Route path="*" element={<NotFound />} />

        </Routes>

      </Router>

    </>

  );

}