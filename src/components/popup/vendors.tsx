import { Col, Input, Row } from 'antd'
import React, { useEffect, useRef } from 'react'
import Styles from './Popup.module.scss'
import Logo from '../../assets/logo.jpg'
import { EnvironmentFilled } from '@ant-design/icons';
import Panel from '../../assets/panel1.jpg'
import Cancel from '../../assets/cancel.jpg'
import Comp from '../../assets/compareImg.jpg'


interface PopupProps {
    closeModel: () => void;
}
const Vendors = ({ closeModel }: PopupProps) => {


    return (
        <div className={Styles.wrap} onClick={closeModel} >
            <div className={Styles.popMain }>
                <img className={Styles.popX} src={Cancel} onClick={closeModel} />
                <img className={Styles.popLogo} src={Logo} />
                <Row justify={'space-between'} align={'middle'}>
                    <Col span={8}>
                        <img src={Comp} className={Styles.sideImg}/>
                    </Col>
                    <Col span={14}>
                        <h3 className={Styles.popSubHead}>
                            Compare and get the <span>lowest</span> prices
                        </h3>
                        <p className={Styles.popPara}>
                            Looking for the best deal on solar? Our platform offers transparency, allowing you to easily compare quotes from our network of pre-screened, approved, expert installers. With multiple options at your fingertips, you can choose the best solar solution for your needs at the lowest price. Don’t overpay for solar – let us help you find the right option for your budget. Sign up and start comparing quotes today!
                        </p>
                        <div className={Styles.popInput}>
                            <Input className={Styles.popAdd} placeholder='Type your postcode or address' prefix={<EnvironmentFilled />} />
                            <button className={Styles.popBtn}>Get Started</button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Vendors