import { Col, Row } from 'antd';
import styles from './styles.module.scss';
import Logo from '../../assets/icons/logo.jpg';
import Cancel from '../../assets/icons/cancel.jpg';
import Home from '../../assets/potrait/homevendorImg.jpg';
import CustomBtn from '../buttons/orangeButton';

interface PopupProps {
    closeModel: () => void;
}

const Expert = ({ closeModel }: PopupProps) => {

    return (
        <div className={styles.wrap} onClick={closeModel}>

            <div className={styles.popMain}>
                <img className={styles.popX} src={Cancel} onClick={closeModel} />
                <img className={styles.popLogo} src={Logo} />
                <Row justify={'space-between'} align={'middle'}>
                    <Col span={8}>
                        <img src={Home} className={styles.sideImg}/>
                    </Col>
                    <Col span={13}>
                        <h3 className={styles.popSubHead}>
                            SG Solar Home vendor network
                        </h3>
                        <p>
                            With our extensive network of pre-screened, high-quality solar installers, you can be confident that you’ll receive the best possible service and the highest quality solar system installation. We carefully vet each of our installers to ensure that they are licensed, certified and experienced professionals with a proven track record of delivering top customer service.
                        </p>
                        <div className={styles.popInput}>
                            <CustomBtn>Get started with solar now</CustomBtn>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Expert