import React from 'react'
import Img from '../../assets/solution.jpg'
import Styles from './expert.module.scss'
import { Row, Col } from 'antd'
const expert: React.FC = () => {
    return (
        <div className={Styles.main}>
            <Row className={Styles.inner} align={'middle'} >
                <Col className={Styles.left} span={9} offset={2}>

                    <h3 >OUR EXPERT INSTALLERS AT YOUR SERVICE</h3>
                    <h1>
                        The Best companies
                        for your solar panel
                        installation
                    </h1>
                    <p>
                    With our extensive network of pre-screened, high-quality solar companies, you can be confident that you'll receive the best possible service and the highest quality solar panel installation. We carefully vet each of our installers to ensure that they are fully licensed and experienced professionals with a proven track record of delivering exceptional customer service. By choosing us, you can trust that you're working with the best solar companies in the industry.
                    </p>
                    <div className={Styles.filled}>
                        <button className={Styles.btn}>Learn More</button>
                    </div>

                </Col>
                <Col span={11} >
                    <img className={Styles.img} src={Img} alt="img" />
                </Col>
            </Row>
        </div>
    );
};

export default expert;