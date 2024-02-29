import React from 'react'
import Call from '../../assets/call.jpg'
import Styles from './faq.module.scss'
import { Row, Col } from 'antd'
import Accordian from './accordian';
import { data } from './questionsBank';
const Faq: React.FC = () => {
    return (
        <div className={Styles.main}>
            <Row className={Styles.meet} align={'middle'} justify={'center'}>
                <Col className={Styles.meetCol} span={18}>
                    <Row justify={'space-between'} align={'middle'}>
                        <Col span={10} className={Styles.padCol}>
                            <h3 className={Styles.head1} >{data.head1}</h3>
                            <h3 className={Styles.head2}>
                                <span>Answers</span> to your solar
                                energy questions
                            </h3>
                            <p>
                                {data.para}
                            </p>
                            <div className={Styles.filled}>
                                <button className={Styles.btn}>{data.btn}</button>
                                <div style={{display:'flex', alignItems:"center"}}>
                                    <img src={Call}/>
                                    <p>Request a call back</p>
                                </div>
                            </div>
                        </Col>
                        <Col className={Styles.meetCol2} span={12}>

                        </Col>
                    </Row>
                </Col>

            </Row>

        </div>
    );
};

export default Faq;