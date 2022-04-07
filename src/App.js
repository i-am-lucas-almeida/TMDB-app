import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import ScrollToTop from './components/layout/ScrollToTop';

import NavBar from './components/layout/NavBar';
import Home from './components/pages/Home/Home';
import Movies from './components/pages/Movies/Movies';
import Series from './components/pages/Series/Series';
import SignIn from './components/pages/SignIn/SignIn';
import SignUp from './components/pages/SignUp/SignUp';

function App() {

  return (

    <>

      <Router>

        <ScrollToTop />

        <NavBar/>

        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/movies' element={<Movies/>} />
          <Route path='/series' element={<Series/>} />
          <Route path='/signIn' element={<SignIn/>} />
          <Route path='/signUp' element={<SignUp/>} />

        </Routes>

      </Router>

    </>

  );

}

export default App;
