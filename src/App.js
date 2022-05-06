import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import ScrollToTop from './components/layout/ScrollToTop';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

import Home from './components/pages/Home/Home';
import Details from './components/pages/Details/Details';
import Search from './components/pages/Search/Search';
import NotFound from './components/layout/NotFound';

export default function App() {

  return (

    <>

      <Router>

        <ScrollToTop />

        <NavBar/>

        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/details/:id' element={<Details/>} />
          <Route path='/search/:id' element={<Search/>} />
          <Route path='*' element={<NotFound/> }/>

        </Routes>

        <Footer/>

      </Router>

    </>

  );

}