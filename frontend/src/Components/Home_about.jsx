import React from 'react'
import "./Homi.css"

const Home_about = () => {
  return (
    <>
    <section className="about-section">
    <div className="container2">
      <h1>About Us</h1>
      <p>
        Welcome to our company! We are dedicated to providing the best service in the industry. Our team of professionals is here to meet all your needs.
      </p>
      <div className="about-content">
        <div className="about-image">
          <img src="\images\boss.png" alt="About us" />
        </div>
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver high-quality products and exceptional customer service. We strive to exceed expectations and continuously improve our offerings.
          </p>
        </div>
        
       
      
    </div>
    <div className='leadership'>
            <h1>Leadership</h1>
        <div className="about-leader">
            <div className="leader-1">
                <div className="image">
                    <img src="/images/person1.avif" alt="" />
                </div>
                <div className="leader-role">
                    <h2>Rajib Mahata</h2>
                    <p>backend</p>
                </div>
            </div>
            <div className="leader-2">
            <div className="image">
                    <img src="/images/person2.avif" alt="" />
                </div>
                <div className="leader-role">
                <h2>Nilkamal Mahata</h2>
                    <p>frontend</p>
                </div>
            </div>
            <div className="leader-3">
            <div className="image">
                    <img src="/images/person3.jpg" alt="" />
                </div>
                <div className="leader-role">
                <h2>tushali Halder</h2>
                    <p>Designer</p>
                </div>
            </div>
            <div className="leader-4">
            <div className="image">
                    <img src="/images/person4.avif" alt="" />
                </div>
                <div className="leader-role">
                <h2>Rahul dev Samanta</h2>
                    <p>data collector</p>
                </div>
            </div>
            <div className="leader-5">
            <div className="image">
                    <img src="/images/person5.avif" alt="" />
                </div>
                <div className="leader-role">
                <h2>Debangsu debnath</h2>
                    <p>Leader and Frontend</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    </section>
  </>
  )
}

export default Home_about;