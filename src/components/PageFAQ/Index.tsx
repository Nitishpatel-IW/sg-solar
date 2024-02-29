import React, { useState } from 'react'
import Styles from './pageFaq.module.scss'
import { Col, Row, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import Add from '../../assets/faqadd.jpg'
import Sub from '../../assets/faqminus.jpg'
import { Topic } from './content'
const Pagefaq = () => {
    const [selected, setSelected] = useState(-1)
    const toggle = (i: number) => {
        if (selected == i) {
            return setSelected(-1)
        }
        setSelected(i)
    }

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
                        <Col span={18} className={Styles.rightCol}>
                            <div className={Styles.wrapper}>
                                <div className={Styles.accordian}>
                                    {Topic.map((t) => (

                                        <div key={t.key}>
                                            <h3>{t.head}</h3>
                                            {t.faq.map((item, i) => (
                                                <div className={Styles.item} key={i}>
                                                    <div className={Styles.title} onClick={() => toggle(i)}>
                                                        <span>{selected === i ? <img src={Sub} className={Styles.imgsec} /> : <img src={Add} className={Styles.imgsec} />}</span>
                                                        <p>{item.question}</p>
                                                    </div>
                                                    <div className={Styles[selected === i ? 'showContent' : 'content']}>{item.answer}</div>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Pagefaq