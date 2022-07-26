import React ,{useState ,useEffect} from "react";
import '../About/About.css';
import HeaderBlack from '../HeaderBlack/HeaderBlack';
import ImageHeader from "../ImageHeader/ImageHeader";
import danilov1 from '../../Images/danilov1.png';
import danilov2 from '../../Images/danilov2.png'
import VideoPart from "../VideoPart/VideoPart";
import Footer from "../../components/Footer/Footer";
import Header  from "../Header/Header";
import FollowUs from "../home/Leman/FollowUs/FollowUs"
import MobileSwiper from "./MobileSwiper";
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
      <>
        <div> 
         <HeaderBlack dimensions={dimensions} />
          <div className="about-header">
          
             
          </div>

          <div className="about-heading-general">
                        <div className="about-nav">
                            <p>Home  /  Man  /  SS ‘22 Collection </p>

                        </div>
                        <div className="about-name-cont">

                        
                        <div className="about-name">
                            <h1>About us</h1>


                        </div>
                        <div className="about-line">
                          <div className="emalatxana"><p>Emalatxana</p> </div>
  
                        </div>
                        </div>
                    </div>
            
             <div className="aboutBottom">
             
                   <div className="about-main">
                     <div className="about-text1">
                       <p  className="p1">Vitae, odio adipiscing aenean tortor diam, vitae amet volutpat urna</p>
                       <p className="p2 eget">
                        Vitae, odio adipiscing aenean tortor diam, vitae amet volutpat urna. Id aliquam ante eu tellus tristique quam magna non.
                        Tortor sapien purus massa neque nibh quis tempus natoque in. Eget est amet tellus justo faucibus.
                        </p>

                     </div>

                     <div className="about-images">
                       <div className="img-ab">
                       <img src={danilov1} style={{width:"100%"}}></img>
                       </div>
                       <div  className="img-ab">
                       <img src={danilov2} style={{width:"60%"}}></img>
                       </div>

                       
                     </div>

                     <div className="about-text2">
                       <p>Vitae, odio adipiscing aenean tortor diam, vitae amet volutpat urna. Id aliquam ante eu tellus tristique quam magna non. Tortor sapien purus massa neque nibh quis tempus natoque in. Eget est amet tellus justo faucibus.</p>
                       <p>Vitae, odio adipiscing aenean tortor diam, vitae amet volutpat urna. Id aliquam ante eu tellus tristique quam magna non. Tortor sapien purus massa neque nibh quis tempus natoque in. Eget est amet tellus justo faucibus.</p>

                     </div>

                   </div>
                   


                   <div className="danilovimg-mob">

                     <div className="about-mob-text1">
                       <p>Vitae, odio adipiscing aenean tortor diam, vitae amet volutpat urna. Id aliquam ante eu tellus tristique quam magna non.</p>

                     </div>
                         <MobileSwiper/>
                      
                        

                     <div className="about-mob-texts">

                     

                     <div className="about-mob-text2">
                       <p>Tincidunt dui viverra duis sapien etiam sed urna faucibus. Malesuada nunc urna, amet accumsan, eleifend vulputate. Non adipiscing purus venenatis, aenean erat enim, etiam pellentesque. Ullamcorper vitae lectus elementum, eu. Arcu egestas non ultricies vel iaculis ultricies velit purus. Varius morbi suscipit amet ullamcorper arcu consectetur amet. Quisque ultrices turpis varius vitae, arcu pharetra.
                        </p>

                     </div>

                     <div className="about-mob-text2">
                       <p>
                       Tincidunt dui viverra duis sapien etiam sed urna faucibus. Malesuada nunc urna, amet accumsan, eleifend vulputate. Non adipiscing purus venenatis, aenean erat enim, etiam pellentesque. Ullamcorper vitae lectus elementum, eu. Arcu egestas non ultricies vel iaculis ultricies velit purus. Varius morbi suscipit amet ullamcorper arcu consectetur amet. Quisque ultrices turpis varius vitae, arcu pharetra.

                       </p>

                      </div>
                      </div>

                   </div>
             </div>
           <VideoPart/>
           <div className="followus-about">
             <FollowUs/>
           </div>
           
           <div className="about-footer">
            
           </div>
        
        </div>
           <Footer/>
           </>
    )
}
export default About
