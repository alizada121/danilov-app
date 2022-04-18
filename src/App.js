
// import { Header } from 'tar';
import './App.css';
import Home from './components/home/Home.jsx'
import NewIn from './components/new in/NewIn';
import Header from './components/Header/Header';
import Contact from './components/contact/Contact';
import Footer from './components/Footer/Footer';
import Profile1 from './components/Profile/Profile1';
import Profile2 from './components/Profile/Profile2';
import Payment from './components/Payment/Payment';



import './style.css'
import HomePage from './component/HomePage/HomePage';
import Arrival from './component/Arrivals/Arrival';
import Shop from './component/Shop/Shop';
import Winter from './component/Winter/Winter';
import Collection from './component/Collection/Collection';
import WinterCollection from './component/WinterCollection/WinterCollection';
import ShoesFour from './component/ShoesFour/ShoesFour';
import Footer from './component/Footer/Footer';
import SingleProduct from './component/SingleProduct/SingleProduct';
import About from './component/About/About';
import Bag from './component/Bag/Bag';
import Delivery from './component/Delivery/Delivery';
import Login from './component/Login/Login';

function App() {
  return (
    <div className="App">

      <Home/>
      <NewIn/>
      {/* <Header/> */}
      {/* <Contact/> */}
      {/* <Footer/> */}
      {/* <Profile1/> */}
      {/* <Profile2/> */}
      {/* <Payment/> */}


     <HomePage/>
     <Arrival/>
     <Shop/>
     <Winter/>
    <Collection/>
    <WinterCollection/>
    <ShoesFour/>
    <Footer/>
    <SingleProduct/>
    <About/>
    <Bag/>
    <Delivery/>


    </div>
  );
}

export default App;
