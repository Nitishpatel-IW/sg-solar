import { Col, Input, Row } from 'antd'
import styles from './styles.module.scss';
import Logo from '../../assets/icons/logo.jpg'
import { EnvironmentFilled } from '@ant-design/icons';
import Cancel from '../../assets/icons/cancel.jpg';
import Comp from '../../assets/potrait/compareImg.jpg';


interface PopupProps {
    closeModel: () => void;
}
const Vendors = ({ closeModel }: PopupProps) => {


    return (
        <div className={styles.wrap} onClick={closeModel} >
            <div className={styles.popMain }>
                <img className={styles.popX} src={Cancel} onClick={closeModel} />
                <img className={styles.popLogo} src={Logo} />
                <Row justify={'space-between'} align={'middle'}>
                    <Col span={8}>
                        <img src={Comp} className={styles.sideImg}/>
                    </Col>
                    <Col span={14}>
                        <h3 className={styles.popSubHead}>
                            Compare and get the <span>lowest</span> prices
                        </h3>
                        <p className={styles.popPara}>
                            Looking for the best deal on solar? Our platform offers transparency, allowing you to easily compare quotes from our network of pre-screened, approved, expert installers. With multiple options at your fingertips, you can choose the best solar solution for your needs at the lowest price. Don’t overpay for solar – let us help you find the right option for your budget. Sign up and start comparing quotes today!
                        </p>
                        <div className={styles.popInput}>
                            <Input className={styles.popAdd} placeholder='Type your postcode or address' prefix={<EnvironmentFilled />} />
                            <button className={styles.popBtn}>Get Started</button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Vendors