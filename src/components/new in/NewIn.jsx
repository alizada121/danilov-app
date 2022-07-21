import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
// import down from "../../assets/Vector.svg"
import rightLine from "../../Images/shirin/rightLine.svg"
import rightLong from "../../assets/vector-right-long.svg"
import filterr from '../../Images/shirin/Frame.svg'
import data from "../../Data.json"
import Card from '../Card/Card'
import FollowUs from '../home/Leman/FollowUs/FollowUs'
import "./NewIn.css"
import Footer from '../Footer/Footer'
import HeaderBlack from "../HeaderBlack/HeaderBlack"
import '../Collection/Collection.css'
import CollectionCard from '../CollectionCard/CollectionCard'
function NewIn({ dimensions }) {
  const [slice2, setSlice2] = useState();
  useEffect(() => {
    if (dimensions.width < 1024) setSlice2(2)
    else setSlice2(4)
  }, [dimensions.width])





  return (
    <>

      <div className='newIn-header'>
        <HeaderBlack dimensions={dimensions} />

      </div>
      <div className='newIn-general'>


        <div className='newIn-container'>
          <div className='newIn-heading-container'>
            <div className='newIn-heading-nav'>
              <p>Home</p>
              <p>  / What's new</p>
            </div>
            <div className='newIn-heading'>
              <div className='newIn-heading-first'>
                <h1>What's new</h1>

              </div>

              <div className='newIn-heading-line-container'>
                <div className='newIn-heading-line'></div>

                <div className='newIn-heading-filter'>
                  <p>Filters</p>
                  <img src={filterr}></img>

                </div>

              </div>



            </div>





            <div className='newIn-body'>

              {dimensions.width > 800 &&
                <><div className='newIn-body-row'>

                  {data.slice(0, slice2).map((item) => {
                    return (
                      <Card name={item.name}
                        price={item.price}
                        desc={item.desc}
                        img={item.img}
                        img2={item.pmg}
                        key={item.name}
                        faiz='iyirmi'

                      />
                    )
                  })}

                </div>

                  <div className='newIn-body-row'>

                    {data.slice(0, slice2).map((item) => {
                      return (
                        <Card name={item.name}
                          price={item.price}
                          desc={item.desc}
                          img={item.img}
                          img2={item.pmg}
                          key={item.name}
                          faiz='iyirmi'
                        />
                      )
                    })}


                  </div>


                  <div className='newIn-body-row'>

                    {data.slice(0, slice2).map((item) => {
                      return (
                        <Card name={item.name}
                          price={item.price}
                          desc={item.desc}
                          img={item.img}
                          img2={item.pmg}
                          key={item.name}
                          faiz='iyirmi'
                        />
                      )
                    })}


                  </div></>


              }
              {(dimensions.width < 800) &&
                <>
                  {data.slice(0, 10).map((item) => {
                    return (
                      <CollectionCard

                        name={item.name}
                        price={item.price}
                        desc={item.desc}
                        img={item.img}
                        img2={item.pmg}
                        key={Math.random()}
                        faiz='collection-faiz'
                      // className="collection-card-1"


                      />
                    )
                  })}
                </>
              }
            </div>



            <div className='NewIn-part-nav-container'>

              <div className='NewIn-part-nav'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>...</p>
                <p className='lastnumber'>30</p>
                <img src={rightLong}></img>
              </div>
             

            </div>




          </div>



        </div>

      </div>
      {dimensions.width < 500 &&
<div className='fefe'>

  <div className='collection-followUS'>
  <FollowUs />
</div>
</div>

}
<div className='NewIn-footer'>
<Footer />

</div>
    </>
  )
}

export default NewIn