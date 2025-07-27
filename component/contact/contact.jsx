import React from 'react'
import './contact.css';

const contact = () => {
  return (
    <>
       <section className='content-contact my-5'>
         <div>
              <h4 className='text-uppercase mb-3 fs-1 fw-bolder'>conatct section</h4>
              <div className="form-floating">
                <input type="text" className="form-control my-4" id="floatingAge" placeholder="User Name" />
                <label htmlFor="floatingPassword">User Name</label>
              </div>
              <div className="form-floating">
                <input type="number" className="form-control my-4" id="floatingAge" placeholder="User Age" />
                <label htmlFor="floatingPassword">User Age</label>
              </div>
              <div className="form-floating">
                <input type="email" className="form-control my-4" id="floatingEmail" placeholder="User Email" />
                <label htmlFor="floatingPassword">User Email</label>
              </div> 
              <div className="form-floating">
                <input type="password" className="form-control my-4" id="floatingPassword" placeholder="User Password" />
                <label htmlFor="floatingPassword">User Password</label>
              </div>
              <button className='myBtn-contact my-5'>Send Message</button>
         </div>
       </section>


    </>
  )
}

export default contact
