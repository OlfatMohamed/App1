import React from 'react';
import './Home.css';
import Avatar from '../../src/assets/imgi_1_avataaars.svg';

function Home() {
 

  return (
    <>
      <section className="home-content">
            <div>
              <div className="inner">
                <img src={Avatar} className="w-100 avatar" alt="avatar" />
                <h1>start Framework</h1>
                <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
            </div>
     </section>
    </>
  );
}

export default Home;
