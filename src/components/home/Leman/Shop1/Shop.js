import React,{useState,useEffect} from 'react'
import Card from "../../../Card/Card.jsx"

import data from "../../../../Data.json"
import "../Shop1/Shop.css"

function Shop() {
  
  const [dimensions, setDimensions] = useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })

  
  const [slice1,setSlice1]=useState(0);
  const [slice2,setSlice2]=useState(3);

  useEffect(()=>{
    if(dimensions.width < 1024) setSlice2(1)
    else setSlice2(3)
  },[dimensions.width])
  console.log(dimensions)
  return (
    <div className='shop-general'>

      <div className='shop-heading'>
        <h1>Shop</h1>

      </div>

      <div className="shop1-slider">
      <div className='ShopSlider-slider-part1'  >
                {data.slice(slice1,slice2).map((item) => {
                    return (
                        <Card 

                        name={item.name} 
                        price={item.price}
                        desc={item.desc} 
                        img={item.img}
                        key={Math.random()}
                        faiz= 'otuz'


                        />
                    )
                })}

                </div>
                

      </div> 

    </div>
  )
}

export default Shop