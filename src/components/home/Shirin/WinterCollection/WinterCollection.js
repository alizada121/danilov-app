
import React ,{useState ,useEffect} from "react";
import "../WinterCollection/WinterCollection.css"
import remove4 from '../../../../Images/remove4.png';


import '../WinterCollection/WinterCollection.css';
// import remove4 from '../../Images/remove4.png';
import Winter from '../../Shirin/Winter/Winter';
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
const WinterCollection = () => {
    const [dimensions, setDimensions] = React.useState({
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
        <>
        {(dimensions.width > 820) &&
          <div className="collectionWinter">
            <div><img className="colwin" src={remove4}/></div>
            <div className="magna">
                <h1 className="twenty">‘22 Winter Collection</h1>
                <p className="odio">Vitae, odio adipiscing aenean tortor diam,
                    vitae amet volutpat urna.
                    Id aliquam ante eu tellus tristique quam magna non.</p>
            </div>
        </div>
        }
        {(dimensions.width < 820) &&   <Winter/>}
      
        </>
        
    )
}
export default WinterCollection


