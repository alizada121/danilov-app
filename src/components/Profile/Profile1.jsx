import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import "../Profile/Profile1.css"
import HeaderBlack from "../HeaderBlack/HeaderBlack"

function Profile1() {

    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
      })
  return (
      <>
       <div className='Profile1-header'>
            <HeaderBlack dimensions={dimensions}/>

        </div>
    <div className='Profile1-container'>
        
        <div className='Profile1'>
           

          <div className='Profile1-heading-container'>
          <div className='Profile1-heading-nav'>
              <p>Home</p>
              <p>  /Bag</p>
          </div>
          <div className='Profile1-heading'>
            <div className='Profile1-heading-first'>
              <h1>Profile</h1>

            </div>

            <div className='Profile1-heading-line'> 

            </div>           
          </div>       
         </div>

         <div className='Profile1-signUp-container'>
             <div className='Profile1-signUp-heading'>
                 <p id='Sign-up-p'>Sign up</p>
                 <p>/ Sign in</p>
             </div>

             <div className='Profile1-signUp-form'>
                 <div className='SignUp-form-row'>
                     <div className='row'>
                          <p>Full name</p>
                          <input placeholder='Name Second Name' type="text"></input>
                     </div>
                     <div className='row'>
                     <p>Email address / Number </p>
                     <input placeholder='namesurname@email.com' type="text"></input>
                    </div>
                 </div>

                 <div className='SignUp-form-row'>
                     <div className='row'>
                         <p>Password</p>
                         <input placeholder='***********'></input>
                     </div>
                     <div className='row'>
                     <p>Password again</p>
                     <input placeholder='***********'></input> 
                     </div>
                 </div>


                 <div className='SignUp-form-row'>
        
                     <div className='button-row'>
                         <input type="button" name='Sign up' value="Sign up"></input>
                         <p>Do you have an account? <span>Sign in</span></p>
                     </div>
                     

                 </div>

                
             </div>
             


         </div>

         <div className='Profile1-footer'>
                     <Footer/>

            </div>



        </div>
    </div></>
  )
}

export default Profile1