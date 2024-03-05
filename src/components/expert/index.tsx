import React, { useState } from 'react'
import styles from './expert.module.scss'
import { Row, Col } from 'antd'
import { data } from './content';
import ExpertPopup from '../popup/experts'

const Expert: React.FC = () => {

    const [showPopup,setShowPopup] = useState(false);

    const closePop = ()=>{
        return(
            setShowPopup(false)
        )}
    return (
        <div className={styles.main}>
            <Row className={styles.meet} align={'middle'} justify={'center'}>
                <Col className={styles.meetCol} span={18}>
                    <Row justify={'space-between'} align={'middle'}>
                        <Col span={10} className={styles.padCol}>
                            <h3 className={styles.head1} >{data.head1}</h3>
                            <h3 className={styles.head2}>
                               {data.head2}
                            </h3>
                            <p>
                                {data.para}
                            </p>
                            <button className={styles.btn} onClick={()=> setShowPopup(true)}>{data.btn}</button>
                        </Col>
                        <Col className={styles.meetCol2} span={12}>
                            <img src={data.img} />
                        </Col>
                    </Row>
                </Col>
            </Row>
            {showPopup && <ExpertPopup closeModel={closePop}/>}
        </div>
    );
};

export default Expert;