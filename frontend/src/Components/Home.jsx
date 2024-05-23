import React, { useEffect } from "react";
import "./Homi.css";
import { MDBCarousel, MDBCarouselItem,MDBCarouselCaption } from 'mdb-react-ui-kit';

import About from "./Home_about";
import Contact from "./Home_contact";

const Home = () => {
  return (
    <>
    
    <MDBCarousel showIndicators showControls fade >
      <MDBCarouselItem itemId={1} style={{height: "100vh",background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)'}}>
        <img src='/images/andra-main.jpg' className='d-block w-100 carousel-image' alt='Slide 1'  />
        <div className="slide-details">
          <h5>Andhra Pradesh</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, nam!</p>
          <button className="home-btn">More Item</button>
        </div>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2} style={{height: "100vh",background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)'}}>
        <img src='/images/arunachal-main.jpg' className='d-block w-100 carousel-image' alt='Slide 2' />
        <div className="slide-details">
          <h5>Arunachal Pradesh</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, nam!</p>
          <button className="home-btn">More Item</button>
        </div>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3} style={{height: "100vh",background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)'}}>
        <img src='/images/assam-main.jpg' className='d-block w-100 carousel-image' alt='Slide 3' />
        <div className="slide-details">
          <h5>Assam</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, nam!</p>
          <button className="home-btn">More Item</button>
        </div>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={4} style={{height: "100vh",background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)'}}>
        <img src='/images/bihar-main.jpg' className='d-block w-100 carousel-image' alt='Slide 3' />
        <div className="slide-details">
          <h5>Bihar</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, nam!</p>
          <button className="home-btn">More Item</button>
        </div>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={5} style={{height: "100vh",background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)'}}>
        <img src='/images/chattisgharh-main.jpg' className='d-block w-100 carousel-image' alt='Slide 3' />
        <div className="slide-details">
          <h5>Chhattisgarh</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, nam!</p>
          <button className="home-btn">More Item</button>
        </div>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={6} style={{height: "100vh",background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)'}}>
        <img src='/images/goa-main.jpg' className='d-block w-100 carousel-image' alt='Slide 3' />
        <div className="slide-details">
          <h5>Goa</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, nam!</p>
          <button className="home-btn">More Item</button>
        </div>
      </MDBCarouselItem>
    </MDBCarousel>
  



  


      <About />
      <Contact />
    </>
  );
};

export default Home;
