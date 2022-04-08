
import './style.css'
import './App.css';
import HomePage from './component/HomePage/HomePage';
import Arrival from './component/Arrivals/Arrival';
import Shop from './component/Shop/Shop';
import Winter from './component/Winter/Winter';
import Collection from './component/Collection/Collection';
function App() {
  return (
    <div className="App">
     <HomePage/>
     <Arrival/>
     <Shop/>
     <Winter/>
    <Collection/>
    </div>
  );
}

export default App;
