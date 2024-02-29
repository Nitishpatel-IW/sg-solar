import React from 'react'
import Img from '../../assets/referral.jpg'
import Styles from './referral.module.scss'
import { Row, Col } from 'antd'
const referral: React.FC = () => {
  return (
    <div className={Styles.main}>

      <Row className={Styles.meet} align={'middle'} justify={'center'}>
        <Col className={Styles.meetCol} span={18}>
          <Row justify={'space-between'} align={'middle'}>
            <Col span={10} className={Styles.padCol}>
              <h3 className={Styles.head1} >SOL REFERRAL</h3>
              <h3 className={Styles.head2}>
                Empower your
                network, Empower
                your wallet

              </h3>
              <p>
              As a member of SG Solar Home community, you have the opportunity to earn extra income by simply referring others to our services.
              </p>
            </Col>
            <Col className={Styles.meetCol2} span={12}>
              <img src={Img} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default referral;