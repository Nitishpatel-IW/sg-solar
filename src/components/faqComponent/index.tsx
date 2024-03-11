import React from 'react'
import Call from '../../assets/call.jpg'
import styles from './styles.module.scss'
import { Row, Col } from 'antd'
import Accordian from './accordian';
import { data } from './questionsBank';
const Faq: React.FC = () => {
    return (
        <div className={styles.main}>
            <Row className={styles.meet} align={'middle'} justify={'center'}>
                <Col className={styles.meetCol} span={18}>
                    <Row justify={'space-between'} align={'top'}>
                        <Col span={10} className={styles.padCol}>
                            <h3 className={styles.head1} >{data.head1}</h3>
                            <h3 className={styles.head2}>
                                <span>Answers</span> to your solar
                                energy questions
                            </h3>
                            <p>
                                {data.para}
                            </p>
                            <div className={styles.filled}>
                                <button className={styles.btn}>{data.btn}</button>
                                <div style={{display:'flex', alignItems:"center"}}>
                                    <img src={Call}/>
                                    <p>Request a call back</p>
                                </div>
                            </div>
                        </Col>
                        <Col className={styles.meetCol2} span={12}>
                            <Accordian/>
                        </Col>
                    </Row>
                </Col>

            </Row>

        </div>
    );
};

export default Faq;