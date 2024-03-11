import { Col, Input, Row } from 'antd';
import styles from './styles.module.scss';
import Logo from '../../assets/icons/logo.jpg';
import { EnvironmentFilled } from '@ant-design/icons';
import Panel from '../../assets/potrait/panel1.jpg';
import Cancel from '../../assets/icons/cancel.jpg';

interface PopupProps {
    closeModel: () => void;
}

const Finance = ({ closeModel }: PopupProps) => {

    return (
        <>
            <div className={styles.wrap} onClick={closeModel}></div>
            <div className={styles.popMain} >
                <img className={styles.popX} src={Cancel} onClick={closeModel} />
                <img className={styles.popLogo} src={Logo} />
                <h3 className={styles.popHead}>SOLFINANCE</h3>
                <h3 className={styles.popSubHead}>
                    Own solar panels starting <span>from SGD 65/month,</span> with no upfront fees
                </h3>
                <p className={styles.popPara}>
                    If you can pay your electric bill, you can pay for solar and save money from Day 1! We call it SOL Financing which is clear, transparent and doesn’t have any hidden costs. Our low-cost loans are designed to fit your budget and financial needs. And the best part? You can start saving on your energy bills from day one AND we also include free maintenance service during the period of the loan so that you can be sure that your system’s performance is at the top level.
                </p>
                <p className={styles.popPara}>
                    Don’t let the upfront cost of solar hold you back, contact us today and start your journey towards energy independence.
                </p>
                <div className={styles.popInput}>
                    <Input className={styles.popAdd} placeholder='Type your postcode or address' prefix={<EnvironmentFilled />} />
                    <button className={styles.popBtn}>Get Started</button>
                </div>

                <Row justify={'space-between'} align={'bottom'}>
                    <Col span={7}>
                        <img className={styles.popImg1} src={Panel} />
                        <h3 className={styles.popPV}>3 kW Solar PV</h3>
                        <p className={styles.popSGD}>
                            <b>65 SGD</b> /month<br /> Est. monthly savings of SGD 85
                        </p>
                    </Col>
                    <Col span={7}>
                        <img className={styles.popImg2} src={Panel} />
                        <h3 className={styles.popPV}>5 kW Solar PV</h3>
                        <p className={styles.popSGD}>
                            <b>115 SGD</b> /month<br /> Est. monthly savings of SGD 145
                        </p>
                    </Col>
                    <Col span={7}>
                        <img className={styles.popImg3} src={Panel} />
                        <h3 className={styles.popPV}>10 kW Solar PV</h3>
                        <p className={styles.popSGD}>
                            <b>220 SGD</b> /month<br /> Est. monthly savings of SGD 290
                        </p>
                    </Col>
                </Row>
            </div>

        </>
    )
}

export default Finance