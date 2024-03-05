import React from 'react'
import Img1 from '../../assets/drops.jpg'
import Img2 from '../../assets/barchart.jpg'
import { Row, Col } from 'antd'
import Styles from './efficiency.module.scss'
import { data } from './content'
const Efficiency: React.FC = () => {
  return (
    <div className={Styles.main}>
      <Row className={Styles.meet} align={'middle'} justify={'center'}>
        <Col className={Styles.meetCol} span={18}>
          <Row justify={'space-between'} align={'middle'}>
            <Col span={10} className={Styles.padCol}>
              <h3 className={Styles.head1}>
                {data.head1}
              </h3>
              <h3 className={Styles.head2}>
                {data.head2}
              </h3>
              <p>
                {data.para}
              </p>
            </Col>
            <Col className={Styles.meetCol2} span={12}>
              <img className={Styles.img} src={Img1} />
              <img className={Styles.img1} src={Img2} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Efficiency;