import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import NullPage from './pages/nullpage';
import logo from './img/bethanylogo.png';
import './App.css' ;


function App() {
  const imageUrl=logo;
  return (
    <div className="App">
      
      <BrowserRouter>
      <header className='head'>
      <nav className='nav-link'>
      <ul className='list-items'>
        <li className='item'>
          <Link to="/">Home</Link>
        </li>
        <li className='item'>
          <Link to="/about">About</Link>
        </li>
        <li className='item'>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
    <img className='head-logo' src= {imageUrl} alt='site logo'></img>
      </header>
      
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/contact' element={<Contact/>}/> 
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NullPage/>}/>
      </Routes>
      
      </BrowserRouter>    
    </div>
  );
}

export default App;
