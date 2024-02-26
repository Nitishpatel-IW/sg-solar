import React from 'react'
import Img1 from '../../assets/drops.jpg'
import Img2 from '../../assets/barchart.jpg'
import { Row, Col } from 'antd'
import Styles from './efficiency.module.scss'
import {data} from './content'
const Efficiency: React.FC = () => {
  return (
    <div className={Styles.main}>
    <Row className={Styles.inner} align={'middle'} >
      <Col className={Styles.left} span={9} offset={2}>

        <h3 >SOL PROTECTION</h3>
        <h1>
          100% Roof protection included
        </h1>
        <p>
        Your satisfaction and peace of mind are our top priority. That’s why we offer our SOL Roof guarantee, which covers any roof issues related to the installation of your solar energy system. Any damage of the roof which occurs during solar panel installation will be promptly resolved by our team of experts. We’ve got you covered, so that you can buy solar with confidence. *
        </p>
        <div className={Styles.filled}>
          <button className={Styles.btn}>Learn More</button>
        </div>

      </Col>
      <Col className={Styles.right} span={11} >
        <img className={Styles.img} src={Img1} alt="img" />
        <img className={Styles.img1} src={Img2} alt="img" />
      </Col>
    </Row>
  </div>  
  );
};

export default Efficiency;