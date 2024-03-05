import React from 'react'
import Styles from './Popup.module.scss'
import Logo from '../../assets/logo.jpg'
import Cancel from '../../assets/cancel.jpg'
import { Input } from 'antd'
import { EnvironmentFilled } from '@ant-design/icons';

interface PopupProps {
    closeModel: () => void;
}
const Police = ({ closeModel }: PopupProps) => {
    return (
        <div className={Styles.wrap} onClick={closeModel}>

            <div className={Styles.popMain}>
                <img className={Styles.popX} src={Cancel} onClick={closeModel} />
                <img className={Styles.popLogo} src={Logo} />
                <h3 className={Styles.popHead}>SOL Roof Guarantee</h3>
                <h3 className={Styles.popSubHead}>
                    Solar on your rooftop, with <span>Confidence.</span>
                </h3>
                <p className={Styles.popPara}>
                    A free service which covers 50% of your contract value, up to S$10,000, for any damages due to the solar installation.
                </p>
                <p className={Styles.popPara}>
                    Concerned about your roof being damaged or leaking due to solar installation ? We understand that. That’s why our SOL Roof guarantee is there to cover such issues. SOL Roof guarantee covers 50% of your contract value, up to S$10,000, for broken tiles, leaking roof or roof damages due to the solar installation on your roof. With SOL Roof guarantee, you can start your solar journey with confidence.
                </p>

                <ol>
                    <h3>How to benefit from SOL Roof Guarantee</h3>
                    <div className={Styles.list}>
                        <li>Choose a quote from our network of pre-selected, accredited solar vendors.</li>
                        <li>Check that your selected vendor meets the criteria for SOL Roof Guarantee to apply.</li>
                        <li>Benefit from SOL Roof Guarantee.</li>
                    </div>
                </ol>
                <p className={Styles.popPara}>
                    SOL Roof Guarantee is only applicable for solar projects which have been signed on SG Solar Home platform. Projects which were signed with ineligible vendors on SG Solar Home or which were signed directly with vendors, outside of SG Solar Home, do not qualify.
                </p>
                <p className={Styles.popPara}>
                    * If the roof was broken, repaired or was found leaking in past 1 year prior to the installation, SOL Roof Guarantee does not apply.
                </p>
                <div className={Styles.popInput}>
                    <Input className={Styles.popAdd} placeholder='Type your postcode or address' prefix={<EnvironmentFilled />} />
                    <button className={Styles.popBtn}>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Police