import styles from './easy.module.scss'
import React from 'react'
import { Row, Col } from 'antd'

import { data } from './content'
const Easy = () => {
    return (
        <div className={styles.main} id='easy'>
            <Row className={styles.first} justify={'center'}>
                <Col span={4}>
                    <h2>{data.head}</h2>
                </Col>
                <Col span={11}>
                    <p>
                        {data.para}
                    </p>
                </Col>
            </Row>
            <Row className={styles.second} justify={'center'}>
                <Col className={styles.secondCol} span={9}>
                    <img src={data.img1} />
                </Col>
                <Col className={styles.secondCol} span={9}>
                    <img src={data.img2} />
                </Col>
            </Row>

        </div>
    )
}

export default Easy