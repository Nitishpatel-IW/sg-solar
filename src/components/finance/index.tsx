import React, { useState } from 'react'

import { Row, Col } from 'antd'
import styles from './styles.module.scss'
import { Data } from './content';
import FinancePopup from '../popup/finance'
import CustomBtn from '../buttons/orangeButton';

const Finance: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);
    showPopup?document.body.style.overflow="hidden":document.body.style.overflow="auto"
    const ClosePop =():void=>{
        return setShowPopup(false);
    }
    return (
        <div className={styles.main}>
            <Row className={styles.meet} align={'middle'} justify={'center'}>
                <Col className={styles.meetCol} span={18}>
                    <Row justify={'space-between'} align={'middle'}>
                        <Col span={10} className={styles.padCol}>
                            <h3 className={styles.head1} >{Data.head1}</h3>
                            <h3 className={styles.head2}>
                                Own solar panels starting
                                from <span>SGD 65 / month</span> ,
                                with no upfront fees
                            </h3>
                            <p className={styles.para}>
                               {Data.para}
                            </p>
                            <CustomBtn onClick={() => setShowPopup(true)}>{Data.btn}</CustomBtn>
                        </Col>
                        <Col className={styles.meetCol2} span={12}>
                            <img className={styles.img} src={Data.img} />
                        </Col>
                    </Row>
                </Col>
            </Row>
            {showPopup && <FinancePopup closeModel={ClosePop}/>} 
        </div>
    );
};

export default Finance;