import React, { useState } from 'react'
import Img from '../../assets/Rectangle.jpg'
import Styles from './protection.module.scss'
import { Row, Col } from 'antd'
import { data } from './content';
import PolicePopup from '../popup/police'


const Protection: React.FC = () => {

  const [showPopup, setShowPopup] = useState(false);

  const ClosePop = (): void => {
    return setShowPopup(false);
  }
  return (
    <div className={Styles.main}>
      <Row className={Styles.meet} align={'middle'} justify={'center'}>
        <Col className={Styles.meetCol} span={18}>
          <Row justify={'space-between'} align={'middle'}>
            <Col span={10} className={Styles.padCol}>
              <h3 className={Styles.head1} >{data.head1}</h3>
              <h3 className={Styles.head2}>
                {data.head2}
              </h3>
              <p>
                {data.para}
              </p>
              <button className={Styles.btn} onClick={()=>setShowPopup(true)}>{data.btn}</button>
            </Col>
            <Col className={Styles.meetCol2} span={12}>
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