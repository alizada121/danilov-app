import React from 'react'
import HomeLeman from './HomeLeman'
import HomePage from '../Shirin/HomePage'

function Home({dimensions}) {
  return (
    <div className='Home'>
        {/* <HomePage/> */}
        <HomeLeman dimensions={dimensions}/>
      


    </div>
  )
}

export default Home