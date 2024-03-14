import styles from './styles.module.scss';
import Slider from './slider';
import CustomBtn from '../buttons/orangeButton';

const Confident = () => {
    return (
        <div className={styles.main} id='confident'>
            <div className={styles.up}>
                <h1 className={styles.head1}>Become knowledgeable and <br /> <span>confident</span> about solar
                </h1>
                <p className={styles.para1}>
                    Find all the answers your need about solar with SG Solar Home.
                </p>
                <a href='https://medium.com/@sgsolarhome'>
                    <CustomBtn>View All Articles</CustomBtn>
                </a>
            </div>
            <Slider />
        </div>
    )
}

export default Confident