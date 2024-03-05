import React, { useState } from 'react'

import { Row, Col } from 'antd'
import Styles from './finance.module.scss'
import { data } from './content';
import FinancePopup from '../popup/finance'
const Finance: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);

    const ClosePop =():void=>{
        return setShowPopup(false);
    }
    return (
        <div className={Styles.main}>
            <Row className={Styles.meet} align={'middle'} justify={'center'}>
                <Col className={Styles.meetCol} span={18}>
                    <Row justify={'space-between'} align={'middle'}>
                        <Col span={10} className={Styles.padCol}>
                            <h3 className={Styles.head1} >{data.head1}</h3>
                            <h3 className={Styles.head2}>
                                Own solar panels starting
                                from <span>SGD 65 / month</span> ,
                                with no upfront fees
                            </h3>
                            <p>
                               {data.para}
                            </p>
                            <button className={Styles.btn}  onClick={() => setShowPopup(true)} >{data.btn}</button>
                        </Col>
                        <Col className={Styles.meetCol2} span={12}>
                            <img src={data.img} />
                        </Col>
                    </Row>
                </Col>
            </Row>
            {showPopup && <FinancePopup closeModel={ClosePop}/>} 
        </div>
    );
};

export default Finance;