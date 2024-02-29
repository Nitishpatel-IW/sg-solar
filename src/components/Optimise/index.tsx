import React from 'react'
import Styles from './optimise.module.scss'
import { Row, Col } from 'antd'
import { EnvironmentFilled } from '@ant-design/icons';
import { Input } from 'antd';
import Img from '../../assets/optimise.jpg'
const index = () => {
    return (
        <div className={Styles.main}>
            <Row className={Styles.meet} align={'middle'} justify={'center'}>
                <Col className={Styles.meetCol} span={18}>
                    <Row justify={'space-between'} align={'middle'}>
                        <Col span={10} className={Styles.padCol}>
                            <h3 className={Styles.head1} >SOL EXPERT</h3>
                            <h3 className={Styles.head2}>
                                <span>Optimise</span> your solar design & Installation using <span>SOL Expert</span>
                            </h3>
                            <p>
                                On our platform, you can consult with our in-house solar experts when you receive your initial solar design. Our experts can help answer any questions you may have about solar design, installation, vendor comparison, and service improvements.
                            </p>
                            <div className={Styles.filled}>
                                <Input className={Styles.add} placeholder='Type your postcode or address' prefix={<EnvironmentFilled />} />
                                <button className={Styles.btn}>Get started</button>
                            </div>
                        </Col>
                        <Col className={Styles.meetCol2} span={12}>
                            <img src={Img} />
                        </Col>
                    </Row>
                </Col>

            </Row>
        </div>
    )
}

export default index