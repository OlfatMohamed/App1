import React from 'react';
import './Portfolio.css'; // تأكدي إن الملف موجود فعلاً

import portofolio1 from '../../src/assets/imgi_1_poert1.png';
import portofolio2 from '../../src/assets/imgi_2_port2.png';
import portofolio3 from '../../src/assets/imgi_3_port3.png';

const images = [portofolio1, portofolio2, portofolio3, portofolio1, portofolio2, portofolio3];

function Portfolio() {
  return (
    <section className="portfolio py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="text-uppercase fw-bold">Portfolio component</h2>
        </div>
        <div className="row g-4">
          {images.map((image, index) => (
            <div className="col-md-4" key={index}>
              <div className="portfolio-card p-3 shadow-sm rounded">
                <img src={image} alt={`portfolio ${index}`} className="img-fluid portfolio-img" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
