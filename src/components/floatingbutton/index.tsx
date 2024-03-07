import React from 'react';
import styles from './button.module.scss'; // Import CSS module
import what from '../../assets/whats.jpg'
import calen from '../../assets/calen.jpg'
const FloatingSquares = () => {
  return (
    <div className={styles.floatingSquaresContainer}>
      <div className={styles.floatingSq}>
        <img className={styles.calendarIcon} src={what} />
        <div className={styles.message}>Message</div>
      </div>
      <div className={styles.floatingSquare}>
        <img className={styles.calendarIcon} src={calen} />
        <div className={styles.message}>Meetings</div>
      </div>
    </div>
  );
};

export default FloatingSquares;
