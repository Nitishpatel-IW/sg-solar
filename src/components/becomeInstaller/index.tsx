import styles from './styles.module.scss';
import { Box, Market, Meet, data, list } from './content';
import { Col, Row } from 'antd';
import Img from '../../assets/potrait/solvendor..jpg';

const Installer = () => {
    return (
        <div className={styles.main}>
            <Row className={styles.first} justify={'center'}>
                <Col className={styles.firstCol} span={18}>
                    <h3 className={styles.firsthead}>Become our Partner:</h3>
                    <h3 className={styles.firsthead}>Partner with us</h3>
                    <p className={styles.firstpara}>Partner with us for scalable and efficient solar installations.</p>
                </Col>
            </Row>
            <Row className={styles.insta} justify={'center'} >
                <Col className={styles.instacol} span={9}>
                    <>
                        {data.map((d) => (
                            <div className={styles.instadiv}>
                                <div className={styles.imgdiv}>
                                    <img className={styles.image} src={d.img} />
                                </div>
                                <div className={styles.contentdiv}>
                                    <h3 className={styles.contenthead}>{d.head}</h3>
                                    <p className={styles.contentpara}>{d.para}</p>
                                </div>
                            </div>
                        ))}
                    </>
                </Col>
                <Col span={1}></Col>
                <Col className={styles.right} span={8}>
                    <h3 className={styles.righthead}>Why Join Our <span>SOL<br /> Installer</span> Community?</h3>
                    <ul className={styles.rightul}>
                        {list.map((l) => (
                            <li className={styles.rightli}>{l.ul}</li>
                        ))}
                    </ul>
                </Col>
            </Row>


            {/* //Market */}


            <Row className={styles.market} justify={'center'}>
                <Col className={styles.upCol} span={18}>
                    <Row className={styles.upColRow} justify={'space-between'}>
                        <Col className={styles.upColcontent} span={17}>
                            <h3 className={styles.markethead}>How <span>SOL<br /> Market</span> place works</h3>
                            <p className={styles.marketpara}>{Market.para}</p>
                        </Col>
                        <Col className={styles.upColbtn} span={6}>
                            <button>Join Our Partner Network</button>
                        </Col>
                    </Row>
                </Col>
                <Col className={styles.downCol} span={18}>
                    <Row className={styles.downRow} justify={'center'}>
                        {Box.map((b) => (
                            <Col className={styles.boxCol} span={7}>
                                <img className={styles.boximg}src={b.img} />
                                <h3 className={styles.boxhead}>{b.head}</h3>
                                <p className={styles.boxpara}>{b.para}</p>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>


            {/* ---Company meet--- */}


            <Row className={styles.meet} align={'middle'} justify={'center'}>
                <Col className={styles.meetCol} span={18}>
                    <Row justify={'space-between'}>
                        <Col span={10} className={styles.padCol}>
                            <h3 className={styles.padhead}>Does Your <span>Company Meet</span> Our Requirements??</h3>
                            <ul className={styles.padul}>
                                {Meet.map((m) => (
                                    <li className={styles.padli}>{m.ul}</li>
                                ))}
                            </ul>
                        </Col>
                        <Col className={styles.meetCol2} span={12}>
                            <img className={styles.colimg} src={Img} />
                        </Col>
                    </Row>
                </Col>

            </Row>
        </div>
    )
}

export default Installer