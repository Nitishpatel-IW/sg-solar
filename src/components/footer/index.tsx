import React from 'react'
import Styles from './footer.module.scss'
import Logo from '../../assets/logo.jpg'
import Fb from '../../assets/fb.jpg'
import Ib from '../../assets/insta.jpg'
import In from '../../assets/lnkdn.jpg'
import { Row, Col } from 'antd'
const Footer = () => {
    return (
        <>
            <div className={Styles.main}>
                <Row className={Styles.first} justify="center">
                    <Col className={Styles.firstCol} span={18}>
                        <h2>“ Powering homes and businesses in Singapore with the sun,<span>SG Solar Home.</span> ”</h2>
                        <button className={Styles.btn}>Get started with solar today</button>
                    </Col>
                </Row>
                <Row className={Styles.second} justify={'center'}>
                    <Col className={Styles.secondOne} span={3}>
                        <img src={Logo} />
                        <p>625 Aljunied road, 05-06, Aljunied Industrial Complex, Singapore, 389836</p>
                        <div className={Styles.contact}>
                            <img src={Fb} />
                            <img src={Ib} />
                            <img src={In} />

                        </div>
                    </Col>

                    <Col span={8}></Col>

                    <Col className={Styles.secondTwo} span={7}>
                        <Row>
                            <Col span={10}>
                                <h3>Become our Partner
                                </h3>
                                <p>For solar installers</p>
                            </Col>
                            <Col span={9}>
                                <h3>Learn about Solar</h3>
                                <p>Articles</p>
                                <p>FAQ</p>
                            </Col>
                            <Col span={5}>
                                <h3>About us</h3>
                                <p>SG Solar Home</p>
                                <p>Our pojects</p>
                                <p>How we work</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className={Styles.lineRow} justify={'center'}>
                    <Col className={Styles.line} span={18}></Col>
                </Row>
                <Row className={Styles.btmRow} justify={'center'}>
                    <Col className={Styles.btm} span={3}>PRIVACY POLICY</Col>
                    <Col className={Styles.btm} span={11}>TERMS & CONDITIONS</Col>
                    <Col className={Styles.btmCR} span={4}>Copyright © 2023 SG Solar Home</Col>
                </Row>
            </div>
        </>
    )
}

export default Footer