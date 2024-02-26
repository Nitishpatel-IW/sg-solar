import React from 'react';
import Styles from './scrollbox.module.scss';
import {Top, Data } from './data';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';
import 'swiper/css/effect-fade';
// import required modules
import {Parallax,EffectFade, Mousewheel, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <div className={Styles.up}>
            <h1>
              {Top.head}
            </h1>
            <p>
              {Top.para}
            </p>
      </div>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        effect={'fade'}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel,EffectFade, Pagination]}
        className="mySwiper"
      >
      {Data.map((data)=>(
      <SwiperSlide>
        <div className={Styles.side} style={{backgroundImage: `url(${data.photo})`}}>
        </div>
        <img src={data.img}/>
      </SwiperSlide>
      ))}
      </Swiper>
    </>
  );
}


// <>
//   <Swiper
//     direction={'vertical'}
//     pagination={{
//       clickable: true,
//     }}
//     mousewheel={true}
//     modules={[Mousewheel,Pagination]}
//     className="mySwiper"
//   >
//     {Data.map((data)=>(
//       <SwiperSlide>

//<img src={data.img}/></SwiperSlide>
//       ))}
    
//   </Swiper>
// </>