import React ,{useState ,useEffect} from "react";
import '../About/About.css';
import HeaderBlack from '../HeaderBlack/HeaderBlack';
import ImageHeader from "../ImageHeader/ImageHeader";
import danilov1 from '../../Images/danilov1.png';
import danilov2 from '../../Images/danilov2.png'
import VideoPart from "../VideoPart/VideoPart";
import Footer from "../../components/Footer/Footer";
import Header  from "../Header/Header";
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
  
const About = ({setWitdhh})=>{
    const [text , setText]=useState(false)
    const [border ,setBorder]=useState(false);
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
    return(
        <div>
          <div className="about-header">
             {/* <HeaderBlack dimensions={dimensions} /> */}
             <Header/>
          </div>
            
             <div className="aboutBottom">
                   <ImageHeader title={'Home  /  About us '} titleH1={'Abous us'} setBorder={!border} setText={!text} imagetext={'Emalatxana'}  setWitdhh={true}/>
                   <div className="danilovimg">
                       <div className="danilov1img">
                           <p className="odio">Vitae, odio adipiscing aenean tortor diam, vitae amet volutpat urna</p>
                           <img src={danilov1}/>
                           <p className="ante">Vitae, odio adipiscing aenean tortor diam, vitae amet volutpat urna. 
                               Id aliquam ante eu tellus tristique quam magna non. 
                                sapien purus massa neque nibh quis tempus natoque in.
                                 Eget est amet tellus justo faucibus.</p>
                       </div>
                       <div className="danilov2img">
                       <p className="ante">Vitae, odio adipiscing aenean tortor diam,
                            vitae amet volutpat urna. Id aliquam ante eu tellus tristique
                             quam magna non. Tortor sapien purus massa neque nibh quis tempus 
                             natoque in. Eget est amet tellus justo faucibus.</p>
                           <img src={danilov2}/>
                           <p className="ante">Vitae, odio adipiscing aenean tortor diam, vitae amet volutpat urna. 
                               Id aliquam ante eu tellus tristique quam magna non. 
                                sapien purus massa neque nibh quis tempus natoque in.
                                 Eget est amet tellus justo faucibus.</p>
                       </div>
                       
                   </div>
                   <hr/>
             </div>
           <VideoPart/>
           <div className="about-footer">
             <Footer/>
           </div>
           
        </div>
    )
}
export default About
