import React, { useState } from 'react'
import styles from './compare.module.scss'
import { Row, Col } from 'antd'
import { EnvironmentFilled } from '@ant-design/icons';
import { Input } from 'antd';
import VendorPopup from '../popup/vendors'
import { data } from './content';


const Compare = () => {

    const [showPopup,setShowPopup]= useState(false);

    const closePop =()=>{
        return(
            setShowPopup(false)
        )}

    return (
        <div className={styles.main}>
            <Row className={styles.meet} align={'middle'} justify={'center'}>
                <Col className={styles.meetCol} span={18}>
                    <Row justify={'space-between'} align={'middle'}>
                        <Col span={10} className={styles.padCol} order={1}>
                            <h3 className={styles.head1} >{data.head1}</h3>
                            <h3 className={styles.head2}>
                                Compare and get the <span>lowest </span>prices
                            </h3>
                            <p>
                               {data.para}
                            </p>
                            <button className={styles.btn} onClick={()=>setShowPopup(true)}>{data.btn}</button>
                        </Col>
                        <Col className={styles.meetCol2} span={12}>
                            <img src={data.img} />
                        </Col>
                    </Row>
                </Col>
            </Row>
            {showPopup && <VendorPopup closeModel={closePop}/>}
        </div>
    )
}

export default Compare