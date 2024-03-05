import React from 'react';
import Styles from './button.module.scss'; // Import CSS module
import what from '../../assets/whats.jpg'
import calen from '../../assets/calen.jpg'
const FloatingSquares = () => {
  return (
    <div className={Styles.floatingSquaresContainer}>
      <div className={Styles.floatingSquare}>
        <img className={Styles.calendarIcon} src={what} />
        <div className={Styles.message}>Message</div>
      </div>
      <div className={Styles.floatingSquare}>
        <img className={Styles.calendarIcon} src={calen} ></img>
        <div className={Styles.message}></div>
      </div>
    </div>
  );
};

export default FloatingSquares;
