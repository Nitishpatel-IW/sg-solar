import React from 'react'
import Styles from './footer.module.scss'
import Logo from '../../assets/logo.jpg'

import { Row, Col } from 'antd'
const Footer = () => {
    return (
        <>
            <div className={Styles.main}>
                <Row className={Styles.first}>
                    <Col span={14}>
                        <h2>“ Powering homes and businesses in Singapore with the sun,<span>SG Solar Home.</span> ”</h2>
                        <button className={Styles.btn}>Get started with solar today</button>
                    </Col>
                </Row>
                <Row className={Styles.second}>
                    <Col span={2}>
                    </Col>
                    <Col span={4}>
                        <img src={Logo} />
                        <p>625 Aljunied road, 05-06, Aljunied Industrial Complex, Singapore, 389836</p>
                    </Col>
                    <Col span={9}>
                    </Col>
                    <Col span={3}>
                        <h4>Become our Partner
                        </h4>
                        <p>For solar installers</p>
                    </Col>
                    <Col span={3}>
                        <h4>Learn about Solar</h4>
                        <p>Articles</p>
                        <p>FAQ</p>
                    </Col>
                    <Col span={3}><h4>About us</h4>
                        <p>SG Solar Home</p>
                        <p>Our pojects</p>
                        <p>How we work</p>
                    </Col>
                </Row>
                <div className={Styles.line}></div> 
            </div>
            <div className={Styles.last}>
                <Row justify={'space-around'}>
                    <Col span={3}>PRIVACY POLICY</Col>
                    <Col span={3}>TERMS & CONDITIONS</Col>
                    <Col span={3}>Copyright © 2023 SG Solar Home</Col>
                </Row>
            </div>
        </>
    )
}

export default Footer