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
        <form>
         
           <label>
            <p>Name</p>
           <input placeholder='Name'></input>
           </label>

         

         
           <label>
            <p>Email address / Phone number</p>
           <input placeholder='Email address / Phone number'></input>
          </label>
        

         
           <label>
            <p>Text here</p>
           <input placeholder='Text here'></input>
           </label>

           <input type="submit" value="Submit" className='Submit' />

        </form>
        </div>

     

    </div>
  )
}

export default ContactForm