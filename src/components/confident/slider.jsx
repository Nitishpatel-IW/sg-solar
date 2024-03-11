import { Data } from './data'
import styles from './styles.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import { content } from '../faqComponent/questionsBank';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={-20}
        navigation={true}
        pagination={{clickable:true,}}
        keyboard={true}
        modules={[Navigation, Pagination, Keyboard]}
        className={styles.mySwiper}
      >
          {Data.map((d,index) => (
            <SwiperSlide loading="lazy" className={styles.swiper} style={{display:content}}>
              <div className={styles.Cart}>
                <div className={styles.imgSec}>
                  <img key={index} className={styles.img3} src={d.img} alt='sliderImg' style={{height: d.height, width: d.width}} />
                </div>
                <div className={styles.content}>
                  <div className={styles.head}>
                    <div className={styles.line}></div>
                    <p className={styles.heading}>{d.h1}</p>
                    <p className={styles.subhead}>{d.sub}</p>
                  </div>
                  <p className={styles.para}>{d.h2}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
