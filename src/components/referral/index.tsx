import React from 'react';
import Img from '../../assets/referral.jpg';
import styles from './styles.module.scss';
import { Row, Col } from 'antd';

const Referral: React.FC = () => {
  return (
    <div className={styles.main}>

      <Row className={styles.meet} align={'middle'} justify={'center'}>
        <Col className={styles.meetCol} span={18}>
          <Row justify={'space-between'} align={'middle'}>
            <Col span={10} className={styles.padCol}>
              <h3 className={styles.head1} >SOL REFERRAL</h3>
              <h3 className={styles.head2}>
                Empower your
                network, Empower
                your wallet

              </h3>
              <p>
              As a member of SG Solar Home community, you have the opportunity to earn extra income by simply referring others to our services.
              </p>
            </Col>
            <Col className={styles.meetCol2} span={12}>
              <img src={Img} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Referral;