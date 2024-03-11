import React, { useState } from 'react'
import styles from './styles.module.scss'
import { Card, Col, Row, Button } from 'antd';
import { cirle, payment, police, thumb, tick } from './gridData'
import PolicePopup from '../popup/police'
import FinancePopup from '../popup/finance'



const Grid: React.FC = () => {


  const [showPolice, setShowPolice] = useState(false);
  showPolice?document.body.style.overflow="hidden":document.body.style.overflow="auto"

  const ClosePolice = (): void => {
    return setShowPolice(false);
  }
  const [showFinance, setShowFinance] = useState(false);
  if(showPolice==false)
  {
    showFinance?document.body.style.overflow="hidden":document.body.style.overflow="auto"
  }

  const CloseFinance = (): void => {
    return setShowFinance(false);
  }


  return (
    <div className={styles.main}>
      <h1>100% <span>Confidence</span> in solar, now!</h1>
      <p className={styles.subpara}>Now Solar Installation is Risk-Free thanks to our SOL Roof Guarantee included in your project</p>

      <Row className={styles.mainRow}>
        <Col className={styles.leftCol} span={6}>
          <img src={police.img} />
          <h1>{police.head}</h1>
          <h3>{police.subhead}</h3>
          <p>{police.para}</p>
          <p>{police.tc}</p>
          <Button className={styles.polBtn} onClick={() => setShowPolice(true)}>Learn more</Button>
        </Col>
        <Col className={styles.rightCol} span={12}>
          <Row className={styles.subRow}>
            <Col className={styles.cirCol} span={11}>
              <img src={cirle.img} />
              <h2>{cirle.head}</h2>
              <p>{cirle.para}</p>
            </Col>

            <Col className={styles.payCol} span={11}>
              <div>
                <h2>{payment.head}</h2>
                <img src={payment.img} />
              </div>
              <p>{payment.para}</p>
              <button onClick={()=>setShowFinance(true)} >Learn more</button>
            </Col>
          </Row >
          <Row className={styles.subRowtwo}>
            <Col className={styles.thuCol} span={11}>
              <img src={thumb.img} />
              <h2>{thumb.head}</h2>
              <p>{thumb.para}</p>
            </Col>
            <Col className={styles.ticCol} span={11}>
              <h2>{tick.head}</h2>
              <div className={styles.outer}>

                <div className={styles.divone}>
                  <div className={styles.subdivone}>
                    <img className={styles.tick} src={tick.img} alt="" />
                    <p>Experience</p>
                  </div>
                  <div className={styles.subdivone}>
                    <img className={styles.tick} src={tick.img} alt="" />
                    <p>Reputation</p>
                  </div>
                </div>

                <div className={styles.divone}>
                  <div className={styles.subdivone}>
                    <img className={styles.tick} src={tick.img} alt="" />
                    <p>Quality & Service</p>
                  </div>
                  <div className={styles.subdivone}>
                    <img className={styles.tick} src={tick.img} alt="" />
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

export default Grid;
