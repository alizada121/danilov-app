import React,{useState} from 'react'
import Header from '../Header/Header'
import "../contact/Contact.css"
import ContactForm from './ContactForm'
import Footer from "../Footer/Footer"
import HeaderBlack from "../HeaderBlack/HeaderBlack"
import FollowUs from '../home/Leman/FollowUs/FollowUs'


function debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  };
}
function Contact() {

  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  return (
    <>
    <HeaderBlack dimensions={dimensions}/>
    <div className='contact-general'>
      
      
     

      <div className='contact-heading-container'>
        <div className='contact-heading-nav'>
          <p>Home</p>
          <p>  / Contact</p>
        </div>
        <div className='contact-heading'>
          <div className='contact-heading-first'>
            <h1>Contact us</h1>

          </div>

          <div className='contact-heading-line'>

          </div>



        </div>
      </div>

      <div className='contact'>


        <div className='contact-form-container'>
          <ContactForm />

        </div>

        <div className='contact-info'>
          <h3 style={{ marginTop: "0" }}>Opening hours</h3>
          <p style={{ margin: "0" }}>Monday-  Saturday</p>
          <p style={{ marginBottom: "4%" }}>11am - 7pm</p>
          <p style={{ marginBottom: "0" }}>Sunday</p>
          <p style={{ marginBottom: "15%" }}> 12am - 6pm</p>

          <h3>Address</h3>
          <p>Nunc scelerisque diam hac euismod tristique. Nec elit gravida tempor ac nec.</p>

          <h3>Support</h3>
          <p style={{ marginBottom: "3%" }}>hello@danilov.az</p>
          <p >(+994 55) 674 66 74</p>


        </div>

      </div>

     





    </div>
     <div className='contact-followUs'>
        <FollowUs/>

      </div>

      <div className='Contact-footer'>
        <Footer />

      </div>
    </>
  )
}

export default Contact