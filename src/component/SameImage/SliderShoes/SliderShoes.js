import React,{useState} from 'react'
import dataSlider from '../../../components/home/Shirin/Shop/DataSlider';
import leftvector from '../../../Images/leftvector.svg'
import rightvector from '../../../Images/rightvector.svg'
import qara from '../../../Images/qara.svg';
import heart from '../../../Images/heart.svg';
import '../SameImage.css';

const  SliderShoes=({ setImgC, setDist , vector})=> {
    const [current, setCurrent] = useState(0);
    const length = dataSlider.length
    const nextSlide = () => {
        setCurrent((prevstate) => {
            if(prevstate < length-1) return prevstate + 1
            else return 0
        })
    }
    console.log(current)
    const prevSlide = () => {
        setCurrent((prevstate) =>  prevstate === 0 ? length - 1 : current - 1)
    }
    if (!Array.isArray(dataSlider) || dataSlider.length <= 0) {
        return null
    }
    let counter = true
    const blackSrc=(e)=>{
       e.target.src = counter ? qara : heart
       counter = !!!counter
    }
  return (
    <div>
    
    <div className={`borderImg ${setImgC && 'activeimg2'}`} id={`${setDist && 'idRandom'}`}>

    <div className="borderimgdist">

        <img className={`prev ${vector && 'vectorr'}`} src={leftvector} onClick={prevSlide} />

        {dataSlider.map((obj, index) => {
            return (
                <div className={index === current ? "slide active" : 'slide'} key={index}>
                    {index === current && (<img className={`shoe2 ${setImgC && 'activeshoe2'}  ${setDist && 'shoesmiddle'}`} src={obj.image} />)}

                </div>


            )
        })}



        <img className={`next ${vector && 'vectorrnext'}`}  src={rightvector} onClick={nextSlide} />
    </div>

    <div className={`element ${setDist && 'element1'} `}>
        <img className="heart" src={heart}  onClick={blackSrc} />
        <div className="bottom">
            <div className="uptext">
                <p>Demedim</p>
            </div>

            <div className="money">
                <p>Dedim</p>
                <span> bir qerar ver</span>
            </div>
        </div>


    </div>

</div>

    </div>
  )
}

export default SliderShoes