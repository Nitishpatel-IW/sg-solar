import React, { useState } from 'react'
import Styles from './compare.module.scss'
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
        <div className={Styles.main}>
            <Row className={Styles.meet} align={'middle'} justify={'center'}>
                <Col className={Styles.meetCol} span={18}>
                    <Row justify={'space-between'} align={'middle'}>
                        <Col span={10} className={Styles.padCol} order={1}>
                            <h3 className={Styles.head1} >{data.head1}</h3>
                            <h3 className={Styles.head2}>
                                Compare and get the <span>lowest </span>prices
                            </h3>
                            <p>
                               {data.para}
                            </p>
                            <button className={Styles.btn} onClick={()=>setShowPopup(true)}>{data.btn}</button>
                        </Col>
                        <Col className={Styles.meetCol2} span={12}>
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