import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-content text-white">
      <div className="container text-center py-5">
        <h2 className="text-uppercase fw-bold mb-4">About component</h2>
        <div className="row text-start">
          <div className="col-md-6 mb-4">
            <p>
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div className="col-md-6 mb-4">
            <p>
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
