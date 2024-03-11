import styles from './styles.module.scss';
import {Top, Data } from './data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';
import 'swiper/css/effect-fade';
import {EffectFade, Mousewheel, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <div className={styles.up} id='howWework'>
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
        initialSlide={1}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel,EffectFade, Pagination]}
        className="mySwiper"
      >
      {Data.map((data)=>(
      <SwiperSlide>
        <div className={styles.side} style={{backgroundImage: `url(${data.photo})`}}>
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