import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay,Pagination } from 'swiper/modules';
import {Link} from 'react-router-dom';

function HeroSlider() {
  return (
    <>

    <div className="hero">
        <div className="container">
          <Swiper  
          loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
           pagination={true} modules={[Pagination,Autoplay]} className="mySwiper">
            
               <SwiperSlide>
                  <div className="content">
                    <h4>Introducing the new</h4>
                    <h3>Microsoft Xbox <br />360 Controller</h3>
                    <p>Windows Xp/10/7/8 Ps3, Tv Box </p>
                    <Link to='/' className='btn'>shop Now</Link>
                </div>
                <img src="src/img/banner_Hero1.jpg" alt="slider hero 1" />
               </SwiperSlide>

               <SwiperSlide>
                  <div className="content">
                    <h4>Introducing the new</h4>
                    <h3>Powerful Bluetooth Speaker</h3>
                    <p>High-volume sound,Long Battery Life</p>
                    <Link to='/' className='btn'>shop Now</Link>
                </div>
                <img src="src/img/banner_Hero2.jpg" alt="slider hero 2" />
               </SwiperSlide>

               <SwiperSlide>
                  <div className="content">
                    <h4>Introducing the new</h4>
                    <h3>Wired Headphones</h3>
                    <p>High-quality sound, Noise Cancelling, Long Battery Life </p>
                    <Link to='/' className='btn'>shop Now</Link>
                </div>
                <img src="src/img/banner_Hero3.jpg" alt="slider hero 3" />
               </SwiperSlide>
        
      </Swiper>
      </div>

        </div>
    
    </>
  )
}

export default HeroSlider;