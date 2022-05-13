import React, {useEffect,useState} from 'react';
import {Route,Switch,Redirect} from "react-router-dom"
// import { Header } from 'tar';
import './App.css';
import Home from './components/home/Leman/Home.jsx'
import NewIn from './components/new in/NewIn';
import Header from './components/Header/Header';
import Contact from './components/contact/Contact';
import Profile1 from './components/Profile/Profile1';
import Profile2 from './components/Profile/Profile2';
import Payment from './components/Payment/Payment';
import Collection from './Collection/Collection';

//Shirin
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
      <Switch>
        <Route exact path="/">
           <Home dimensions ={dimensions}/>
        </Route>

        <Route exact path="/collection">
          <Collection  dimensions ={dimensions}/>
        </Route> 

        <Route exact path="/newIn">
           <NewIn dimensions={dimensions}/>
        </Route>

        <Route exact path="/singleProduct">
            <SingleProduct/>
        </Route>  

        <Route exact path="/about">
          <About/>
        </Route>

        <Route exact path="/contact">
             <Contact/>
        </Route>

        <Route exact path="/bag">
            <Bag/>
        </Route>

        <Route exact path="/delivery">
          <Delivery/>
        </Route>

        <Route exact path="/login">
            <Login/>
        </Route>

        <Route exact path="/signUp">
            <Profile1/>
        </Route>

        <Route exact path="/profile2">
            <Profile2/>
        </Route>

      <Route exact path="/payment">
        <Payment/>
      </Route>

      

      </Switch>
    </div>
  );
}

export default App;
