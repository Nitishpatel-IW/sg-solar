import React from 'react'
import { Row, Col } from 'antd'
import Img1 from '../../assets/every1.jpg'
import Img2 from '../../assets/every2.jpg'
import Img3 from '../../assets/every3.jpg'
import Styles from './every.module.scss'
const Every = () => {
    return (
        <div className={Styles.main}>
            <Row className={Styles.first}>
                <Col span={10}>
                    <h2>Solar benefits <span>everyone</span></h2>
                    <h3>Save money every day, and switch to renewable energy for<br/> generations to come !</h3>
                </Col>
            </Row>
            <Row className={Styles.second} gutter={16}>
                <Col span={8}> 
                    <img src={Img1} />
                    <h2>Solutions for Customers</h2>
                    <p>Affordable solar solutions that power your home and your wallet</p>
                    <button>Get solar today</button>
                </Col>
                <Col span={8}>
                    <img src={Img2} />
                    <h2>Business for Vendors</h2>
                    <p>Grow and scale your solar business and streamline your operations</p>
                    <button>Register with us Today
                    </button>
                </Col>
                <Col span={8}>
                    <img src={Img3} />
                    <h2>Opportunity for Agents</h2>
                    <p>Join our Solar Referral Program and help shape the future of energy</p>
                </Col>
            </Row>
        </div>
    )
}

export default Every