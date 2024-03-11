import React from 'react'
import Img1 from '../../assets/drops.jpg'
import Img2 from '../../assets/barchart.jpg'
import { Row, Col } from 'antd'
import styles from './styles.module.scss'
import { data } from './content'
const Efficiency: React.FC = () => {
  return (
    <div className={styles.main}>
      <Row className={styles.meet} align={'middle'} justify={'center'}>
        <Col className={styles.meetCol} span={18}>
          <Row justify={'space-between'} align={'middle'}>
            <Col span={10} className={styles.padCol}>
              <h3 className={styles.head1}>
                {data.head1}
              </h3>
              <h3 className={styles.head2}>
                {data.head2}
              </h3>
              <p>
                {data.para}
              </p>
            </Col>
            <Col className={styles.meetCol2} span={12}>
              <img className={styles.img} src={Img1} />
              <img className={styles.img1} src={Img2} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Efficiency;