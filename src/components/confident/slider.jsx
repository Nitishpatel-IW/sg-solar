import React from 'react'
import { Data } from './data'
import Styles from './slider.module.scss'
// import Slider from "react-slick";
// import Left from '../../assets/arrowLeft.jpg'
// import Right from '../../assets/arrowRight.jpg'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


// function LeftArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       onClick={onClick}
//     >
//       <img src={Left} />
//     </div>
//   );
// }
// function RightArrow(props) {
//   const { className, onClick } = props;
//   return (
//     <div
//       className={className}
//       onClick={onClick}
//     >
//       <img src={Right} />
//     </div>
//   );
// }
// var settings = {
//   dots: true,
//   infinite: false,
//   speed: 400,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   prevArrow: <LeftArrow />,
//   nextArrow: <RightArrow />,
// };


// const Customslider = () => {
//   return (
//     <div className={Styles.slidermain}>
//       <div className={Styles.gin}>
//           <Slider {...settings}>
//             {Data.map((d) => (
//               <div className={Styles.Cart}>
//                 <div className={Styles.imgSec}>
//                   <img className={Styles.img} src={d.img} alt='sliderImg' />
//                 </div>
//                 <div className={Styles.content}>
//                   <div className={Styles.head}>
//                     <div className={Styles.line}></div>
//                     <p className={Styles.heading}>{d.h1}</p>
//                     <p className={Styles.subhead}>{d.sub}</p>
//                   </div>
//                   <p className={Styles.para}>{d.h2}</p>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//       </div>
//     </div>
//   )
// }

// export default Customslider


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        // cssMode={true}
        slidesPerView={3}
        spaceBetween={1}
        navigation={true}
        pagination={true}
        // mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {Data.map((d) => (
          <SwiperSlide>
            <div className={Styles.Cart}>
              <div className={Styles.imgSec}>
                <img className={Styles.img3} src={d.img} alt='sliderImg' />
              </div>
              <div className={Styles.content}>
                <div className={Styles.head}>
                  <div className={Styles.line}></div>
                  <p className={Styles.heading}>{d.h1}</p>
                  <p className={Styles.subhead}>{d.sub}</p>
                </div>
                <p className={Styles.para}>{d.h2}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="" /></SwiperSlide> */}
      </Swiper>
    </>
  );
}
