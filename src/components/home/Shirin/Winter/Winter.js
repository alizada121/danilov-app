import React, { useState } from "react";
import '../Winter/Winter.css';
import remove4 from '../../../../Images/remove4.png';
import remove5 from '../../../../Images/remove5.png';
import prev from '../../../../Images/prev.svg';
import next from '../../../../Images/next.svg';
import line2 from '../../../../Images/Line 2.svg';
import dataSlider from "../Shop/DataSlider";


const Winter = () => {
    const [current1, setCurrent1] = useState(0);
    const length = dataSlider.length
    const nextSlide1 = () => {
        setCurrent1((prevstate) => {
            console.log('fffff')
            if (prevstate < length - 1) return prevstate + 1
            else return 0
        })
    }
    console.log(current1)
    const prevSlide1 = () => {
        console.log('hhhh')
        setCurrent1((prevstate) => prevstate === 0 ? length - 1 : current1 - 1)
    }
    if (!Array.isArray(dataSlider) || dataSlider.length <= 0) {
        return null
    }
    return (
        <div className="winterCollection">
            <div className="winterTextDiv">
                <h1 className="winterText">‘22 Winter Collection</h1>
                <p className="vitae">Vitae, odio adipiscing aenean
                    tortor diam, vitae amet volutpat urna.
                    Id aliquam ante eu tellus tristique quam magna non.</p>
            </div>

            <div className="twoShoediv">


                {dataSlider.map((obj, index) => {
                    return (
                        <div className={index === current1 ? "slide active" : 'slide'} key={index}>
                            {index === current1 && (
                                <div className="sliders_image">

                                    <img className="twoShoeimg1" src={obj.image2} />
                                    <img className="twoShoeimg2" src={obj.image3} />
                                </div>

                            )}

                        </div>


                    )
                })}


               
            </div>
            <div className="slider">
                <img className="middleLinee1 main" src={prev} onClick={prevSlide1} />
                <img className="middleLinee" src={line2} />
                <img className="middleLinee1 main1" src={next} onClick={nextSlide1} />
            </div>
        </div>
    )
}
export default Winter

