import React from 'react'
import Header from '../Header/Header'
import down from "../../assets/Vector.svg"

import rightLong from "../../assets/vector-right-long.svg"

import data from "../../Data.json"
import Card from '../Card/Card'
import "./NewIn.css"
import Footer from '../Footer/Footer'


function NewIn() {
  return (
    <div className='newIn-general'>
      <div className='newIn-header'>
        <Header/>

      </div>

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
              <img src={down}></img>

            </div>

            </div>

           
              
          </div>

          <div className='newIn-body'>
            <div className='newIn-body-row'>

            {data.slice(0,4).map((item) => {
                return (
                    <Card name={item.name} 
                    price={item.price}
                    desc={item.desc} 
                    img={item.img}
                    key={item.name}
                    faiz='iyirmi'
                    />
                )
            })}

            </div>

            <div className='newIn-body-row'>

            {data.slice(0,4).map((item) => {
                return (
                    <Card name={item.name} 
                    price={item.price}
                    desc={item.desc} 
                    img={item.img}
                    key={item.name}
                    />
                )
            })}


            </div>


            <div className='newIn-body-row'>

            {data.slice(0,4).map((item) => {
                return (
                    <Card name={item.name} 
                    price={item.price}
                    desc={item.desc} 
                    img={item.img}
                    key={item.name}
                    />
                )
            })}


            </div>


          </div>

          <div className='NewIn-part-nav-container'>

            <div className='NewIn-part-nav'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <img src={rightLong}></img>
            </div>
            

          </div>

          <div className='NewIn-footer'>
            <Footer/>

          </div>

          

        </div>

       

      </div>

    </div>
  )
}

export default NewIn