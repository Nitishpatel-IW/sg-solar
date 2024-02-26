import React from 'react'
import Img from '../../assets/referral.jpg'
import Styles from './referral.module.scss'
import { Row, Col } from 'antd'
const referral: React.FC = () => {
  return (
    <div className={Styles.main}>
      <Row className={Styles.inner} align={'middle'} >
        <Col className={Styles.left} span={9} offset={2}>

          <h3 >SOL REFERRAL</h3>
          <h1>
            Empower your
            network, Empower
            your wallet

          </h1>
          <p>
          As a member of SG Solar Home community, you have the opportunity to earn extra income by simply referring others to our services.
          </p>

        </Col>
        <Col span={11} >
          <img className={Styles.img} src={Img} alt="img" />
        </Col>
      </Row>
    </div>
  );
};

export default referral;