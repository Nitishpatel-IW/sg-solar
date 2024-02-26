import React from 'react'
import Styles from './compare.module.scss'
import { Row, Col } from 'antd'
import { EnvironmentFilled } from '@ant-design/icons';
import { Input } from 'antd';
import Img from '../../assets/compare.jpg'


const Compare = () => {
    return (
        <div className={Styles.main}>
            <Row className={Styles.inner} align={'middle'}>
                <Col className={Styles.left} span={9} order={2}>

                    <h3 >COMPARE SOLAR VENDORS ON OUR PLATFORM</h3>
                    <h1>
                        Compare and get the <span>lowest </span>prices
                    </h1>
                    <p>
                        Compare quotes at your convenience and select a reliable partner for your solar panel installation. Our accredited vendors will install solar panels for your home or business, while we guarantee a smooth and hassle-free process.
                    </p>
                    <button className={Styles.btn}>Learn More</button>

                </Col>
                <Col span={11}   offset={2}>
                    <img className={Styles.img} src={Img} alt="girl" />
                </Col>
            </Row>
        </div>
    )
}

export default Compare