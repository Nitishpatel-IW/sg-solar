import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Col, Row, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Add from '../../assets/icons/faqadd.jpg';
import Sub from '../../assets/icons/faqminus.jpg';
import { Topic } from './content';

const Faqpage = () => {
    const [selected, setSelected] = useState<{ [key: number]: number }>({});

    const toggle = (topicId: number, i: number) => {
        setSelected(prevSelected => ({
            ...prevSelected,
            [topicId]: prevSelected[topicId] === i ? -1 : i
        }));
    };

    return (
        <div className={styles.main}>
            <Row className={styles.first} justify={'center'}>
                <Col className={styles.firstCol} span={18}>
                    <h3>Help and Support</h3>
                    <p>Our team of knowledgeable and experienced professionals is here to answer any<br /> questions you may have about solar energy and the installation process.</p>
                    <div className={styles.input}>
                        <Input className={styles.inputfield} placeholder='search your questions' prefix={<SearchOutlined />} />
                    </div>
                </Col>
            </Row>
            <Row className={styles.second} justify={'center'}>
                <Col span={18}>
                    <Row justify={'space-between'}>
                        <Col className={styles.leftCol} span={5}>
                            <h3>General</h3>
                            <h3>Installer</h3>
                            <h3>Cost & Financing</h3>
                            <h3>Maintenance</h3>
                            <h3>Referral</h3>
                            <h3>Renewable Energy Certificates</h3>
                        </Col>
                        <Col span={18} className={styles.rightCol}>
                            <div className={styles.wrapper}>
                                <div className={styles.accordian}>
                                    {Topic.map((t) => (
                                        <div key={t.key}>
                                            <h3 className={styles.general}>{t.head}</h3>
                                            {t.faq.map((item, i) => (
                                                <div className={styles.item} key={i}>
                                                    <div className={styles.title} onClick={() => toggle(t.key, i)}>
                                                        <span>{selected[t.key] === i ? <img src={Sub} className={styles.imgsec} /> : <img src={Add} className={styles.imgsec} />}</span>
                                                        <p>{item.question}</p>
                                                    </div>
                                                    <div className={styles[selected[t.key] === i ? 'showContent' : 'content']}>{item.answer}</div>
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
    );
};

export default Faqpage;
