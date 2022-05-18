import React from 'react'
import "../contact/ContactForm.css"

function ContactForm() {
  return (
    <div className='ContactForm-general'>
      <div className='ContactForm-header'>
        <p>
        Vitae, odio adipiscing aenean tortor diam, vitae amet volutpat urna
        </p>
        </div>


        <div className='ContactForm'>
        <form className='contactForm-form'>
         
           <label>
            <p className='label-p'>Name</p>
           <input placeholder='Name' className='input-contact'></input>
           </label>

         

         
           <label>
            <p className='label-p'>Email address / Phone number</p>
           <input placeholder='Email address / Phone number' className='input-contact'></input>
          </label>
        

         
           <label>
            <p className='label-p'>Text here</p>
           <input placeholder='Text here' className='input-contact'></input>
           </label>

           <input type="submit" value="Submit" className='Submit-contact' />

        </form>
        </div>

     

    </div>
  )
}

export default ContactForm