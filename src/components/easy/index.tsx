import styles from './styles.module.scss';
import { Row, Col } from 'antd';
import { Data } from './content';

const Easy = () => {
    return (
        <div className={styles.main} id='easy'>
            <Row className={styles.first} justify={'center'}>
                <Col span={4}>
                    <h2 className={styles.head}>{Data.head}</h2>
                </Col>
                <Col span={11}>
                    <p className={styles.para}>
                        {Data.para}
                    </p>
                </Col>
            </Row>
            <Row className={styles.second} justify={'center'}>
                <Col className={styles.secondCol} span={9}>
                    <img className={styles.img} src={Data.img1} />
                </Col>
                <Col className={styles.secondCol} span={9}>
                    <img className={styles.img} src={Data.img2} />
                </Col>
            </Row>

        </div>
    )
}

export default Easy;