import Styles from './easy.module.scss'
import React from 'react'
import { Row, Col } from 'antd'
import Img1 from '../../assets/easy1.jpg'
import Img2 from '../../assets/easy2.jpg'
const Easy = () => {
    return (
        <div className={Styles.main} id='easy'>
            <Row className={Styles.first}>
                <Col span={4} offset={1}>
                    <h2>Solar on
                        Every roof,
                        confidently</h2>
                </Col>
                <Col span={12} offset={2}>
                    <p>We founded SG Solar Home with a vision to simplify solar for homeowners and<br/> businesses in Singapore and across South-East Asia. Our goal is to empower customers<br/> to switch to solar with confidence. We do that by providing the best technical solutions<br/> and by offering financing, while taking care of full installation, operations, and<br/> maintenance of the solar power system.
                    </p>
                </Col>
            </Row>
            <Row className={Styles.second} gutter={0}>
                <Col span={10}>
                    <img src={Img1} />
                </Col>
                <Col span={10}>
                    <img src={Img2} />
                </Col>
            </Row>

        </div>
    )
}

export default Easy