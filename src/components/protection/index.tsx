import React, { useState } from 'react'
import styles from './styles.module.scss'
import { Row, Col } from 'antd'
import { Data } from './content';
import PolicePopup from '../popup/police'
import CustomBtn from '../buttons/orangeButton';


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
              <h3 className={styles.head1} >{Data.head1}</h3>
              <h3 className={styles.head2}>
                {Data.head2}
              </h3>
              <p>
                {Data.para}
              </p>
              <CustomBtn bgColor='transparent' border='2px solid white' onClick={()=>setShowPopup(true)}>{Data.btn}</CustomBtn>
            </Col>
            <Col className={styles.meetCol2} span={12}>
              <img src={Data.img} />
            </Col>
          </Row>
        </Col>
      </Row>
      {showPopup && <PolicePopup closeModel={ClosePop}/>}
    </div>
  );
};

export default Protection;