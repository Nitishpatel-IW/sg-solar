import React from 'react'
import Styles from './save.module.scss'
import { Row, Col } from 'antd'
import Img from '../../assets/family.jpg'


const Save = () => {
    return (
        <div className={Styles.main}>
            <Row className={Styles.inner} align={'middle'}>
                <Col className={Styles.left} span={9} order={2}>

                    <h3 >SAVE WITH SOLAR</h3>
                    <h1>
                        Save up to <span>50%</span> on your Electricity Bills
                    </h1>
                    <p>
                        Are you tired of skyrocketing electricity bills? With Singapore's rising electricity tariffs, switching to solar has become a no-brainer. Plus, with the current incentives in place, installing solar panels is more affordable than ever. Not only is solar the cheapest source of energy compared to traditional utilities, but it also protects you from unpredictable price hikes. With instant savings on your energy bills from day one and financing options available, solar can pay for itself straight away. Take control of your energy costs and invest in a brighter future with solar. Contact us today to learn more about the financial benefits of solar and start saving!
                    </p>
                    <button className={Styles.btn}>Calculate your savings</button>

                </Col>
                <Col span={11} offset={2}>
                    <img className={Styles.img} src={Img} alt="girl" />
                </Col>
            </Row>
        </div>
    )
}

export default Save