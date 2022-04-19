import {useEffect,useState} from 'react';
// import { Header } from 'tar';
import './App.css';
import Home from './components/home/Leman/Home.jsx'
import NewIn from './components/new in/NewIn';
import Header from './components/Header/Header';
import Contact from './components/contact/Contact';
import Footer from './components/Footer/Footer';
import Profile1 from './components/Profile/Profile1';
import Profile2 from './components/Profile/Profile2';
import Payment from './components/Payment/Payment';


import Collection from './components/Collection/Collection'
import SingleProduct from './components/SingleProduct/SingleProduct';
import About from './components/About/About';
import Bag from './components/Bag/Bag'
import Delivery from './components/Delivery/Delivery';
import Login from './components/Login/Login';
import './style.css'

function debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  };
}

function App() {
  const [dimensions, setDimensions] = useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })
  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }, 1000)

    window.addEventListener('resize', debouncedHandleResize)

    return _ => {
      window.removeEventListener('resize', debouncedHandleResize)
    
}
  })
  return (
    <div className="App">

      {/* <Home dimensions ={dimensions}/> */}
      {/* <Collection/> */}
      {/* <NewIn dimensions={dimensions}/> */}
      {/* <SingleProduct/> */}
      {/* <About/> */}
      {/* <Contact/> */}
      {/* <Bag/> */}
      {/* <Delivery/> */}
      {/* <Login/> */}
      <Profile1/>
      <Profile2/>
      <Payment/>

      {/* <Footer/> */}

    </div>
  );
}

export default App;
