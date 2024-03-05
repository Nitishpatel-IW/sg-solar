import { Col, Input, Row } from 'antd'
import React, { useEffect, useRef } from 'react'
import Styles from './Popup.module.scss'
import Logo from '../../assets/logo.jpg'
import { EnvironmentFilled } from '@ant-design/icons';
import Panel from '../../assets/panel1.jpg'
import Cancel from '../../assets/cancel.jpg'
import Home from '../../assets/homevendorImg.jpg'

interface PopupProps {
    closeModel: () => void;
}

const Expert = ({ closeModel }: PopupProps) => {

    return (
        <div className={Styles.wrap} onClick={closeModel}>

            <div className={Styles.popMain}>
                <img className={Styles.popX} src={Cancel} onClick={closeModel} />
                <img className={Styles.popLogo} src={Logo} />
                <Row justify={'space-between'} align={'middle'}>
                    <Col span={8}>
                        <img src={Home} className={Styles.sideImg}/>
                    </Col>
                    <Col span={13}>
                        <h3 className={Styles.popSubHead}>
                            SG Solar Home vendor network
                        </h3>
                        <p>
                            With our extensive network of pre-screened, high-quality solar installers, you can be confident that you’ll receive the best possible service and the highest quality solar system installation. We carefully vet each of our installers to ensure that they are licensed, certified and experienced professionals with a proven track record of delivering top customer service.
                        </p>
                        <div className={Styles.popInput}>
                            <button className={Styles.popBtn}>Get started with solar now</button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Expert