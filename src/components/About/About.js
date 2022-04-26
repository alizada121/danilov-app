import React ,{useState} from "react";
import './About.css';
import HeaderBlack from '../HeaderBlack/HeaderBlack';
import ImageHeader from "../ImageHeader/ImageHeader";
import danilov1 from '../../Images/danilov1.png';
import danilov2 from '../../Images/danilov2.png'
import VideoPart from "../VideoPart/VideoPart";
import Footer from "../../components/Footer/Footer";
// import { Header } from "tar";
import Header from "../Header/Header"
const About = ()=>{
    const [text , setText]=useState(false)
    const [border ,setBorder]=useState(false)
    return(
        <div>
            <div className="about-header">
                <Header/>
            </div>
            
             <div className="aboutBottom">
                 
                   <ImageHeader title={'Home  /  About us '} titleH1={'Abous us'} setBorder={!border} setText={!text} imagetext={'Emalatxana'}/>
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