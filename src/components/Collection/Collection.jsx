import React,{useState,useEffect} from 'react'

import "./Collection.css"
import Card from '../Card/Card'
import data from "../../Data.json"
import WinterCollection from '../home/Shirin/WinterCollection/WinterCollection'
import vectorRight from "../../assets/Vector (15).png"

import Footer from '../Footer/Footer'

import HeaderBlack from '../HeaderBlack/HeaderBlack'
import CollectionCard from '../CollectionCard/CollectionCard'
import followUs from '../home/Leman/FollowUs/FollowUs'

function Collection({dimensions}) {

  



   
   

  return (
<>
    <HeaderBlack dimensions={dimensions}/>

    <div className='collection-general'>
   
        <div className='collection'>
           
             
          

            <div className='collection-heading-cont'>
                <div className='collection-nav'>
                    <p>Home </p>
                    <p> / Collection</p>
                </div>

                <div className='collection-heading'>
                    <div className='collection-heading-text'>
                        <h1>Collections</h1>
                    </div>
                    
                    <div className='collection-line-cont'>
                        <div className='collection-line'></div>
                    </div>
                </div>
                

            </div>

            <div className='collection-bg'>

                <div className='collection-text'>
                    <p className ='summer'>Spring & Summer ‘22</p>
                    <h1>Nazvanie Kollekcii</h1>

                </div>

            </div>

            <div className='collection-card'>
            {(dimensions.width > 1000) &&
            <>

                {data.slice(0,4).map((item) => {
                    return (
                        <Card 

                        name={item.name} 
                        price={item.price}
                        desc={item.desc} 
                        img={item.img}
                        img2={item.pmg}
                        key={Math.random()}
                        faiz= 'collection-faiz'
                        // className="collection-card-1"


                        />
                    )
                })}
            </>
        }

            {(dimensions.width < 1000) &&
                <>
                {data.slice(0,4).map((item) => {
                    return (
                        <CollectionCard 

                        name={item.name} 
                        price={item.price}
                        desc={item.desc} 
                        img={item.img}
                        img2={item.pmg}
                        key={Math.random()}
                        faiz= 'collection-faiz'
                        // className="collection-card-1"


                        />
                    )
                })}
                </>
}
            </div>

           

            <div className='collection-winterCol'>
                <WinterCollection/>

            </div>


            <div className='collection-card'>

            {(dimensions.width > 1000) &&
            <>

                {data.slice(0,4).map((item) => {
                    return (
                        <Card 

                        name={item.name} 
                        price={item.price}
                        desc={item.desc} 
                        img={item.img}
                        img2={item.pmg}
                        key={Math.random()}
                        faiz= 'collection-faiz'
                        // className="collection-card-1"


                        />
                    )
                })}
            </>
        }

            {(dimensions.width < 1000) &&
                <>
                {data.slice(0,4).map((item) => {
                    return (
                        <CollectionCard 

                        name={item.name} 
                        price={item.price}
                        desc={item.desc} 
                        img={item.img}
                        img2={item.pmg}
                        key={Math.random()}
                        faiz= 'collection-faiz'
                        // className="collection-card-1"


                        />
                    )
                })}
                </>
                }
            </div>

            <div className='collection-number'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>...</p>
                <p>10</p>
                <img src={vectorRight}></img>


            </div>

            <div className='collection-followUS'>
                <followUs/>
            </div>

            <div className='collection-footer'>
                <Footer/>
                 
            </div>
            
        </div>

    </div>
    </>)
}

export default Collection