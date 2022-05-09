import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import ScrollToTop from './components/layout/ScrollToTop';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

import Home from './components/pages/Home/Home';
import Details from './components/pages/Details/Details';
import Genres from './components/pages/Genres/Genres';
import Search from './components/pages/Search/Search';
import Movies from './components/pages/Movies/Movies';
import Releases from './components/pages/Releases/Releases';
import NotFound from './components/layout/NotFound';
import TopRated from './components/pages/TopRated/TopRated';

export default function App() {

  return (

    <>

      <Router>

        <ScrollToTop />

        <NavBar/>

        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/detalhes/:id/:name' element={<Details/>} />
          <Route path='/pesquisa/:id' element={<Search/>} />
          <Route path='/generos' element={<Genres/>} />
          <Route path='/filmes/:id/:name' element={<Movies/>} />
          <Route path='/em-breve' element={<Releases/>} />
          <Route path='/top-tmdb' element={<TopRated/>} />
          <Route path='*' element={<NotFound/> }/>

        </Routes>

        <Footer/>

      </Router>

    </>

  );

}