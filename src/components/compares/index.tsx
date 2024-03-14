import React, { useState } from 'react'
import styles from './styles.module.scss'
import { Row, Col } from 'antd'
import VendorPopup from '../popup/vendors'
import { data } from './content';
import CustomBtn from '../buttons/orangeButton';


const Compare = () => {

    const [showPopup,setShowPopup]= useState(false);
    showPopup?document.body.style.overflow="hidden":document.body.style.overflow="auto";
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
                            <span className={styles.head1} >{data.head1}</span>
                            <h3 className={styles.head2}>
                                Compare and get the <span>lowest </span>prices
                            </h3>
                            <p className={styles.para}>
                               {data.para}
                            </p>
                            <CustomBtn onClick={()=>setShowPopup(true)} >{data.btn}</CustomBtn>
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