import React,{useState,useEffect} from 'react'
import Header from "../components/Header/Header"
import "../Collection/Collection.css"
import Card from '../components/Card/Card'
import data from "../Data.json"
import WinterCollection from '../components/home/Shirin/WinterCollection/WinterCollection'
import vectorRight from "../assets/Vector (15).png"
import Footer from '../components/Footer/Footer'
  

function Collection() {

    // const [slice1,setSlice1]=useState(0);
    // const [slice2,setSlice2]=useState(4);

    // useEffect(()=>{
    //     if(window.innerWidth< 1024) setSlice2(1)
    //     else setSlice2(4)
    // },[window.innerWidth])
   

  return (
    <div className='collection-general'>
        <div className='collection'>
            <div className='collection-header'>
                <Header/>
            </div>

            <div className='collection-heading-cont'>
                <div className='collection-nav'>
                    <p>Home</p>
                    <p>/Collection</p>
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
                    <p>Spring & Summer ‘22</p>
                    <h1>Nazvanie Kollekcii</h1>

                </div>

            </div>

            <div className='collection-card'>

                {data.slice(0,4).map((item) => {
                    return (
                        <Card 

                        name={item.name} 
                        price={item.price}
                        desc={item.desc} 
                        img={item.img}
                        key={Math.random()}
                        faiz= 'collection-faiz'
                        // className="collection-card-1"


                        />
                    )
                })}

            </div>

            <div className='collection-winterCol'>
                <WinterCollection/>

            </div>


            <div className='collection-card'>

                {data.slice(0,4).map((item) => {
                    return (
                        <Card 

                        name={item.name} 
                        price={item.price}
                        desc={item.desc} 
                        img={item.img}
                        key={Math.random()}
                        faiz= 'collection-faiz'


                        />
                    )
                })}

            </div>

            <div className='collection-number'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>...</p>
                <p>10</p>
                <img src={vectorRight}></img>


            </div>

            <div className='collection-footer'>
                <Footer/>
                 
            </div>
            
        </div>

    </div>
  )
}

export default Collection