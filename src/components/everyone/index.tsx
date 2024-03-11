import { Row, Col } from 'antd';
import styles from './styles.module.scss';
import { Gallery } from './content';

const Every = () => {
    return (
        <div className={styles.main}>
            <Row className={styles.first}>
                <Col span={18}>
                    <h2>Solar benefits <span>everyone</span></h2>
                    <h3>Save money every day, and switch to renewable energy for<br /> generations to come !</h3>
                </Col>
            </Row>
            <Row className={styles.second} justify={'center'}>
                <Col span={21}>
                    <Row className={styles.gaping} justify={'center'}>
                        {Gallery.map((g) => (
                            <Col className={styles.gapingCol} span={7}>
                                <img src={g.img} />
                                <h2>{g.head}</h2>
                                <p>{g.para}</p>
                                {g.btn && <button>{g.btn}</button>}
                            </Col>
                        ))}
                    </Row>
                </Col>

            </Row>
        </div>
    )
}

export default Every