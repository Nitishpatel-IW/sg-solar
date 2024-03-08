import React, { useState } from 'react'
import Img from '../../assets/Rectangle.jpg'
import styles from './protection.module.scss'
import { Row, Col } from 'antd'
import { data } from './content';
import PolicePopup from '../popup/police'


const Protection: React.FC = () => {

  const [showPopup, setShowPopup] = useState(false);
  showPopup?document.body.style.overflow="hidden":document.body.style.overflow="auto"
  const ClosePop = (): void => {
    return setShowPopup(false);
  }
  return (
    <div className={styles.main}>
      <Row className={styles.meet} align={'middle'} justify={'center'}>
        <Col className={styles.meetCol} span={18}>
          <Row justify={'space-between'} align={'middle'}>
            <Col span={10} className={styles.padCol}>
              <h3 className={styles.head1} >{data.head1}</h3>
              <h3 className={styles.head2}>
                {data.head2}
              </h3>
              <p>
                {data.para}
              </p>
              <button className={styles.btn} onClick={()=>setShowPopup(true)}>{data.btn}</button>
            </Col>
            <Col className={styles.meetCol2} span={12}>
              <img src={data.img} />
            </Col>
          </Row>
        </Col>
      </Row>
      {showPopup && <PolicePopup closeModel={ClosePop}/>}
    </div>
  );
};

export default Protection;