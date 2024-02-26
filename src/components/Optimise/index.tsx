import React from 'react'
import Styles from './optimise.module.scss'
import { Row, Col } from 'antd'
import { EnvironmentFilled } from '@ant-design/icons';
import { Input } from 'antd';
import Img from '../../assets/optimise.jpg'
const index = () => {
    return (
        <div className={Styles.main}>
            <Row className={Styles.inner} align={'middle'} >
                <Col className={Styles.left} span={9} offset={2}>

                    <h3 >SOL EXPERT</h3>
                    <h1>
                        <span>Optimise</span> your solar design & Installation using <span>SOL Expert</span>
                    </h1>
                    <p>
                        On our platform, you can consult with our in-house solar experts when you receive your initial solar design. Our experts can help answer any questions you may have about solar design, installation, vendor comparison, and service improvements.
                    </p>
                    <div className={Styles.filled}>
                        <Input className={Styles.add} placeholder='Type your postcode or address' prefix={<EnvironmentFilled />} />
                        <button className={Styles.btn}>Get started</button>
                    </div>

                </Col>
                <Col  span={11} >
                    <img className={Styles.img} src={Img} alt="girl"/>
                </Col>
            </Row>
        </div>
    )
}

export default index