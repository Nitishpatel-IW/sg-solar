import React from 'react'
import Styles from './installer.module.scss'
import { Box, Market, Meet, data, list } from './content'
import { Col, Row } from 'antd'
import Img from '../../../assets/solvendor..jpg'

const Installer = () => {
    return (
        <div className={Styles.main}>
            <Row className={Styles.first} justify={'center'}>
                <Col className={Styles.firstCol} span={18}>
                    <h3>Become our Partner:</h3>
                    <h3>Partner with us</h3>
                    <p>Partner with us for scalable and efficient solar installations.</p>
                </Col>
            </Row>
            <Row className={Styles.insta} justify={'center'} >
                <Col className={Styles.instacol} span={9}>
                    <>
                        {data.map((d) => (
                            <div className={Styles.instadiv}>
                                <div className={Styles.imgdiv}>
                                    <img src={d.img} />
                                </div>
                                <div className={Styles.contentdiv}>
                                    <h3>{d.head}</h3>
                                    <p>{d.para}</p>
                                </div>
                            </div>
                        ))}
                    </>
                </Col>
                <Col span={1}></Col>
                <Col className={Styles.right} span={8}>
                    <h3>Why Join Our <span>SOL<br /> Installer</span> Community?</h3>
                    <ul>
                        {list.map((l) => (
                            <li>{l.ul}</li>
                        ))}
                    </ul>
                </Col>
            </Row>


            {/* //Market */}


            <Row className={Styles.market} justify={'center'}>
                <Col className={Styles.upCol} span={18}>
                    <Row className={Styles.upColRow} justify={'space-between'}>
                        <Col className={Styles.upColcontent} span={17}>
                            <h3>How <span>SOL<br /> Market</span> place works</h3>
                            <p>{Market.para}</p>
                        </Col>
                        <Col className={Styles.upColbtn} span={6}>
                            <button>Join Our Partner Network</button>
                        </Col>
                    </Row>
                </Col>
                <Col className={Styles.downCol} span={18}>
                    <Row className={Styles.downRow} justify={'center'}>
                        {Box.map((b) => (
                            <Col className={Styles.boxCol} span={7}>
                                <img src={b.img} />
                                <h3>{b.head}</h3>
                                <p>{b.para}</p>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>


            {/* ---Company meet--- */}


            <Row className={Styles.meet} align={'middle'} justify={'center'}>
                <Col className={Styles.meetCol} span={18}>
                    <Row justify={'space-between'}>
                        <Col span={10} className={Styles.padCol}>
                            <h3>Does Your <span>Company Meet</span> Our Requirements??</h3>
                            <ul>
                                {Meet.map((m) => (
                                    <li>{m.ul}</li>
                                ))}
                            </ul>
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

export default Installer