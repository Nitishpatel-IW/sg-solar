import styles from './styles.module.scss';
import Logo from '../../assets/icons/logo.jpg';
import Fb from '../../assets/icons/fb.jpg';
import Ib from '../../assets/icons/insta.jpg';
import In from '../../assets/icons/lnkdn.jpg';
import { Row, Col } from 'antd';
import CustomBtn from '../buttons/orangeButton';

const Footer = () => {
    return (
        <>
            <div className={styles.main}>
                <Row className={styles.first} justify="center">
                    <Col className={styles.firstCol} span={18}>
                        <h2 className={styles.head1}>“ Powering homes and businesses in Singapore with the sun,<span>SG Solar Home.</span> ”</h2>
                        <CustomBtn>Get started with solar today</CustomBtn>
                    </Col>
                </Row>
                <Row className={styles.second} justify={'center'}>
                    <Col className={styles.secondOne} span={3}>
                        <img className={styles.img1} src={Logo} />
                        <p className={styles.para1}>625 Aljunied road, 05-06, Aljunied Industrial Complex, Singapore, 389836</p>
                        <div className={styles.contact}>
                            <img className={styles.img2} src={Fb} />
                            <img className={styles.img2} src={Ib} />
                            <img className={styles.img2} src={In} />
                        </div>
                    </Col>
                    <Col span={8}></Col>
                    <Col className={styles.secondTwo} span={7}>
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
                <Row className={styles.lineRow} justify={'center'}>
                    <Col className={styles.line} span={18}></Col>
                </Row>
                <Row className={styles.btmRow} justify={'center'}>
                    <Col className={styles.btm} span={3}>PRIVACY POLICY</Col>
                    <Col className={styles.btm} span={11}>TERMS & CONDITIONS</Col>
                    <Col className={styles.btmCR} span={4}>Copyright © 2023 SG Solar Home</Col>
                </Row>
            </div>
        </>
    )
}

export default Footer