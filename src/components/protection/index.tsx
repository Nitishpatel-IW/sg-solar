import React from 'react'
import Img from '../../assets/Rectangle.jpg'
import Styles from './protection.module.scss'
import { Row, Col } from 'antd'

const protection: React.FC = () => {
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
        <Col span={11} >
          <img className={Styles.img} src={Img} alt="img" />
        </Col>
      </Row>
    </div>
  );
};

export default protection;