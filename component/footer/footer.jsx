import React from 'react'
import './Footer.css';

function footer() {
  return (
    <>
      <footer className='my-footer'>
        <div >
            <div className='row'>
               <div className='col-lg-4'>
              <h4>Location</h4>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
               </div>
               <div className='col-lg-4'>
                <h4>AROUND THE WEB</h4>
                <ul className='list-unstyled d-flex py-5  justify-content-center footer-icon'>
                    <li><i className='fa-brands fa-facebook-f mx-1 icon'></i></li>
                    <li><i className='fa-brands fa-twitter mx-1 icon'></i></li>
                    <li><i className='fa-brands fa-linkedin-in mx-1 icon'></i></li>
                    <li><i className='fa-solid fa-globe mx-1 icon'></i></li>
                </ul>
               </div>
               <div className='col-lg-4'>
                <h4>ABOUT FREELANCER</h4>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
               </div>
          </div>
        </div>
      </footer>
      <div className='copyright'>
              <p>Copyright © Your Website 2021</p>
          </div>
    </>
  );
}

export default footer;