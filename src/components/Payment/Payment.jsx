import React,{useRef} from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import "../Payment/Payment.css"
import HeaderBlack from '../HeaderBlack/HeaderBlack'

function Payment() {
    const infoRef=useRef();
    const succesRef=useRef();

    const paymentProceed=()=>{

        infoRef.current.style.display="none"
        succesRef.current.style.display="flex"
  
    }

    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
      })
  return <>
  <div className='Profile1-header'>
            <HeaderBlack dimensions={dimensions}/>

        </div>
   <div className='Payment-container'>
  <div className='Payment'>
      <div className='Payment-header'>
      

      </div>

     <div className='Payment-heading-container'>
        <div className='Payment-heading-nav'>
            <p>Home</p>
             <p>  /Bag</p>
            </div>
        <div className='Payment-heading'>
         <div className='Payment-heading-first'>
             <h1>Payment</h1>
          </div>
    

         <div className='Payment-heading-line-container'> 
            <div className='Payment-heading-line'></div>
         </div>  
      </div>

      <div className='Payment-info' ref={infoRef}>
          <div className='Payment-details'>
              <h1>Payment details</h1>

              <div className='Payment-Card'>
                  <div className='Payment-Card-row'>
                      <div className='Card-input'> 
                          <p>Card number</p>
                          <input placeholder='1111  2222  3333  4444' ></input>
                      </div>

                      <div className='Card-input-s'>
                          <p>Expiration date</p>
                          <input placeholder='mm / yy'></input>

                      </div>
                      

                  </div>

                  <div className='Payment-Card-row'>
                      <div className='Card-input'>
                          <p>Name on card </p>
                          <input placeholder='Name Surname'></input>

                      </div>
  
                      <div className='Card-input-s'>
                          <p>CVV</p>
                          <input placeholder='123'></input>

                      </div>

 

                  </div>

                  <div className='Payment-Card-row-submit'>
                      <p>Previous step</p>
                      <div className='Card-input-submit' onClick={paymentProceed}>
                         <input type="button" value="Proceed to payment"></input>

                      </div>

                  </div>


              </div>

          </div>

          <div className='Order-summary-container'>
              <h1>Order summary</h1>
              <div className='Order-summary'>
                  
                  <div className='Order-delivery'>
                      <h4> Delivery</h4>
                      <div className='delivery-choices'>
                          <p>Free</p>
                          <p>Express: 10$</p>
                      </div>
                   </div>


                   <div className='Order-subtotal'>
                       <div className='subtotal-row'>
                           <h5 style={{fontWeight:600}}>Subtotal</h5>
                           <h5   className='normal' style={{fontWeight:600}}>1 466$</h5>
                       </div>
                       <div className='subtotal-row'>
                           <p>Discount</p>
                           <p>0.00$</p>
                       </div>
                       <div className='subtotal-row'>
                           <p>Delivery</p>
                           <p>10$</p>
                       </div>

                   </div>

                   <div className='Order-total'>
                       <h4>Total</h4>
                       <h4 className='normal'>1 476$</h4>

                   </div>

              </div>


               
          </div>

       </div>  

       <div className='Payment-success-container' ref={succesRef}>
           <div className='Payment-success'>
               <h1>Payment Confirmed</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh condimentum lacus, duis 
                   viverra sit sodales elementum aliquam amet. Est faucibus curabitur nisi tellus ut pharetra,
                   orci lobortis bibendum. 
                </p>

                <button className='payment-success-button'>Back to shopping</button>
                <div className='payment-receipt'>
                    <p>Print receipt</p>
                </div>

           </div>
          

       </div>

      

      
    </div>       
   </div>

   

  

   



</div>

<div className='Payment-footer'>
               <Footer/>

      </div>
</>
}

export default Payment