import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ScrollToTop from './components/layout/ScrollToTop';
import NavBar from './components/layout/NavBar';
import NotFound from './components/layout/NotFound';

import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import Genres from './pages/Genres/Genres';
import Search from './pages/Search/Search';
import Movies from './pages/Movies/Movies';
import Releases from './pages/Releases/Releases';
import TopRated from './pages/TopRated/TopRated';

export default function App() {

  return (

    <>

      <Router>

        <ScrollToTop />

        <NavBar />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/detalhes/:id/:name' element={<Details />} />
          <Route path='/pesquisa/:id' element={<Search />} />
          <Route path='/generos' element={<Genres />} />
          <Route path='/filmes/:id/:name' element={<Movies />} />
          <Route path='/em-breve' element={<Releases />} />
          <Route path='/top-tmdb' element={<TopRated />} />
          <Route path='*' element={<NotFound />} />

        </Routes>

      </Router>

    </>

  );

}