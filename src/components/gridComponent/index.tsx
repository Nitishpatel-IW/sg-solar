import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { Col, Row } from 'antd';
import { cirle, payment, Police, thumb, tick } from './gridData';
import PolicePopup from '../popup/police';
import FinancePopup from '../popup/finance';

const ModalType = {
  Police: 'showPolice',
  Finance: 'showFinance'
};
const Grid: React.FC = () => {
  const [showModal, setShowModal] = useState('');
  useEffect(() => {
    showModal ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
  }, [showModal]);

  const toggleModal = (modalType: string) => {
    setShowModal(prevModal => (prevModal === modalType ? '' : modalType));
  };

  return (
    <div className={styles.main}>
      <h1>100% <span>Confidence</span> in solar, now!</h1>
      <p className={styles.subpara}>Now Solar Installation is Risk-Free thanks to our SOL Roof Guarantee included in your project</p>

      <Row className={styles.mainRow}>
        <Col className={styles.leftCol} span={6}>
          <img src={Police.img} alt="Police Icon" />
          <h1>{Police.head}</h1>
          <h3>{Police.subhead}</h3>
          <p>{Police.para}</p>
          <p>{Police.tc}</p>
          <button className={styles.polBtn} onClick={() => toggleModal(ModalType.Police)}>Learn more</button>
        </Col>
        <Col className={styles.rightCol} span={12}>
          <Row className={styles.subRow}>
            <Col className={styles.cirCol} span={11}>
              <img src={cirle.img} alt="Circle Icon" />
              <h2>{cirle.head}</h2>
              <p>{cirle.para}</p>
            </Col>

            <Col className={styles.payCol} span={11}>
              <div>
                <h2>{payment.head}</h2>
                <img src={payment.img} alt="Payment Icon" />
              </div>
              <p>{payment.para}</p>
              <button className={styles.button} onClick={() => toggleModal(ModalType.Finance)}>Learn more</button>
            </Col>
          </Row >
          <Row className={styles.subRowtwo}>
            <Col className={styles.thuCol} span={11}>
              <img src={thumb.img} alt="Thumb Icon" />
              <h2>{thumb.head}</h2>
              <p>{thumb.para}</p>
            </Col>
            <Col className={styles.ticCol} span={11}>
              <h2>{tick.head}</h2>
              <div className={styles.outer}>
                <div className={styles.divone}>
                  <div className={styles.subdivone}>
                    <img className={styles.tick} src={tick.img} alt="Tick Icon" />
                    <p>Experience</p>
                  </div>
                  <div className={styles.subdivone}>
                    <img className={styles.tick} src={tick.img} alt="Tick Icon" />
                    <p>Reputation</p>
                  </div>
                </div>
                <div className={styles.divone}>
                  <div className={styles.subdivone}>
                    <img className={styles.tick} src={tick.img} alt="Tick Icon" />
                    <p>Quality & Service</p>
                  </div>
                  <div className={styles.subdivone}>
                    <img className={styles.tick} src={tick.img} alt="Tick Icon" />
                    <p>Certification</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      {showModal === ModalType.Police && <PolicePopup closeModel={() => setShowModal('')} />}
      {showModal === ModalType.Finance && <FinancePopup closeModel={() => setShowModal('')} />}
    </div>
  );
};

export default Grid;
