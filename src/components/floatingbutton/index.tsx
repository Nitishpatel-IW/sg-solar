import styles from './styles.module.scss';
import what from '../../assets/icons/whats.jpg';
import calen from '../../assets/icons/calen.jpg';

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
