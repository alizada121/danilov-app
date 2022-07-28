import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import "../Profile/Profile2.css"
import HeaderBlack from '../HeaderBlack/HeaderBlack'

function Profile2() {

  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  return (
    <div className='es'>
      <div className='Profile2-header'>
        <HeaderBlack dimensions={dimensions} />


      </div>

      <div className='Profile2-container1'>
        <div className='Profile2'>


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
                  <p>Log out  <div className="brdr"></div>  </p>


                </div>

              </div>




            </div>
          </div>





          <div className='Profile2-profile-container'>
            <div className='Profile2-owner'>
              <h1>Shirin   Leman</h1>

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









        </div>
        
      </div>
      <div className='Profile2-footer'>
          <Footer />

        </div>
    </div>
  )
}

export default Profile2