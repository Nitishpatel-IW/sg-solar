import React from 'react'
import Styles from './pageFaq.module.scss'
import { Col, Row, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

const Pagefaq = () => {
    return (
        <div className={Styles.main}>
            <Row className={Styles.first} justify={'center'}>
                <Col className={Styles.firstCol} span={18}>
                    <h3>Help and Support</h3>
                    <p>Our team of knowledgeable and experienced professionals is here to answer any<br /> questions you may have about solar energy and the installation process.</p>
                    <div className={Styles.input}>
                        <Input className={Styles.inputfield} placeholder='search your questions' prefix={<SearchOutlined />} />
                    </div>
                </Col>
            </Row>
            <Row className={Styles.second} justify={'center'}>
                <Col span={18}>
                    <Row justify={'space-between'}>
                        <Col className={Styles.leftCol} span={5}>
                            <h3>General</h3>
                            <h3>installer</h3>
                            <h3>Cost & Financing</h3>
                            <h3>Maintenance</h3>
                            <h3>Referral</h3>
                            <h3>Renewable Energy Certificates</h3>
                        </Col>
                        <Col span={18}>
                            
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Pagefaq