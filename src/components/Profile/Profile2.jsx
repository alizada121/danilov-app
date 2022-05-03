import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import "../Profile/Profile2.css"

function Profile2() {
  return (
    <div className='Profile2-container'>
        <div className='Profile2'>
            <div className='Profile2-header'>
                <Header/>

            </div>

          <div className='Profile2-heading-container'>
          <div className='Profile2-heading-nav'>
              <p>Home</p>
              <p>  /Bag</p>
          </div>
          <div className='Profile2-heading'>
            <div className='Profile2-heading-first'>
              <h1>Profile</h1>

            </div>

            <div className='Profile2-heading-line-container'> 
            <div className='Profile2-heading-line'></div>
            <div className='Profile2-heading-logOut'>
              <p>Log out</p>
              

            </div>   

            </div>      

            

            
          </div>       
         </div>

         <div className='Profile2-profile-container'>
             <div className='Profile2-owner'>
                 <h1>Alizada   Leman</h1>

             </div>

             <div className='Profile2-owner-info-container'>
                 <div className='owner-info'>
                     <p>alizadaleman22@gmail.com</p>
                 </div>

                 <div className='owner-info'>
                     <p>H.Aslanov  Ex 4th Dairavi</p>
                 </div>

             </div>

         </div>
             


        

         <div className='Profile2-footer'>
                     <Footer/>

            </div>



        </div>
    </div>
  )
}

export default Profile2