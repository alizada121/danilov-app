import './style.css'
import './App.css';
import HomePage from './component/HomePage/HomePage';
import Arrival from './component/Arrivals/Arrival';
import Shop from './component/Shop/Shop';
import Winter from './component/Winter/Winter';
import Collection from './component/Collection/Collection';
import WinterCollection from './component/WinterCollection/WinterCollection';
import ShoesFour from './component/ShoesFour/ShoesFour';
import Footer from './component/Footer/Footer';
import SingleProduct from './component/ShoesFour/SingleProduct/SingleProduct';
function App() {
  return (
    <div className="App">
     <HomePage/>
     <Arrival/>
     <Shop/>
     <Winter/>
    <Collection/>
    <WinterCollection/>
    <ShoesFour/>
    <Footer/>
    <SingleProduct/>
    </div>
  );
}

export default App;
