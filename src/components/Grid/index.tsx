import React, { useState } from 'react'
import Styles from './grid.module.scss'
import { Card, Col, Row, Button } from 'antd';
import { cirle, payment, police, thumb, tick } from './gridData'
import PolicePopup from '../popup/police'
import FinancePopup from '../popup/finance'



const SolarInfo: React.FC = () => {


  const [showPolice, setShowPolice] = useState(false);
  const ClosePolice = (): void => {
    return setShowPolice(false);
  }
  const [showFinance, setShowFinance] = useState(false);
  const CloseFinance = (): void => {
    return setShowFinance(false);
  }


  return (
    <div className={Styles.main}>
      <h1>100% <span>Confidence</span> in solar, now!</h1>
      <p className={Styles.subpara}>Now Solar Installation is Risk-Free thanks to our SOL Roof Guarantee included in your project</p>

      <Row className={Styles.mainRow}>
        <Col className={Styles.leftCol} span={6}>
          <img src={police.img} />
          <h1>{police.head}</h1>
          <h3>{police.subhead}</h3>
          <p>{police.para}</p>
          <p>{police.tc}</p>
          <Button className={Styles.polBtn} onClick={() => setShowPolice(true)}>Learn more</Button>
        </Col>
        <Col className={Styles.rightCol} span={12}>
          <Row className={Styles.subRow}>
            <Col className={Styles.cirCol} span={11}>
              <img src={cirle.img} />
              <h2>{cirle.head}</h2>
              <p>{cirle.para}</p>
            </Col>

            <Col className={Styles.payCol} span={11}>
              <div>
                <h2>{payment.head}</h2>
                <img src={payment.img} />
              </div>
              <p>{payment.para}</p>
              <button onClick={()=>setShowFinance(true)} >Learn more</button>
            </Col>
          </Row >
          <Row className={Styles.subRowtwo}>
            <Col className={Styles.thuCol} span={11}>
              <img src={thumb.img} />
              <h2>{thumb.head}</h2>
              <p>{thumb.para}</p>
            </Col>
            <Col className={Styles.ticCol} span={11}>
              <h2>{tick.head}</h2>
              <div className={Styles.outer}>

                <div className={Styles.divone}>
                  <div className={Styles.subdivone}>
                    <img className={Styles.tick} src={tick.img} alt="" />
                    <p>Experience</p>
                  </div>
                  <div className={Styles.subdivone}>
                    <img className={Styles.tick} src={tick.img} alt="" />
                    <p>Reputation</p>
                  </div>
                </div>

                <div className={Styles.divone}>
                  <div className={Styles.subdivone}>
                    <img className={Styles.tick} src={tick.img} alt="" />
                    <p>Quality & Service</p>
                  </div>
                  <div className={Styles.subdivone}>
                    <img className={Styles.tick} src={tick.img} alt="" />
                    <p>Certification</p>
                  </div>
                </div>

              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      {showPolice && <PolicePopup closeModel={ClosePolice} />}
      {showFinance && <FinancePopup closeModel={CloseFinance} />}
    </div>
  );
};

export default SolarInfo;
