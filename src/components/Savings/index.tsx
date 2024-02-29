import React from 'react'
import Styles from './save.module.scss'
import { Row, Col } from 'antd'
import Img from '../../assets/family.jpg'


const Save = () => {
    return (
        <div className={Styles.main}>

            <Row className={Styles.meet} align={'middle'} justify={'center'}>
                <Col className={Styles.meetCol} span={18}>
                    <Row justify={'space-between'} align={'middle'}>
                        <Col span={10} className={Styles.padCol} order={1}>
                            <h3 className={Styles.head1} >SAVE WITH SOLAR</h3>
                            <h3 className={Styles.head2}>
                                Save up to <span>50%</span> on your Electricity Bills
                            </h3>
                            <p>
                                Are you tired of skyrocketing electricity bills? With Singapore's rising electricity tariffs, switching to solar has become a no-brainer. Plus, with the current incentives in place, installing solar panels is more affordable than ever. Not only is solar the cheapest source of energy compared to traditional utilities, but it also protects you from unpredictable price hikes. With instant savings on your energy bills from day one and financing options available, solar can pay for itself straight away. Take control of your energy costs and invest in a brighter future with solar. Contact us today to learn more about the financial benefits of solar and start saving!
                            </p>
                            <button className={Styles.btn}>Calculate your savings</button>
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

export default Save