import React from 'react'
import Styles from './postal.module.scss'
import { EnvironmentFilled } from '@ant-design/icons';
import { Input } from 'antd';
const index: React.FC = () => {
  return (
    <div className={Styles.main}>
      <h1>
        Solar and <span>Saving</span><br /> for every roof
      </h1>
      <p>
        Visualize solar on your roof and check your<br />potential savings now
      </p>
      <div className={Styles.input}>
        <div >
          <Input className={Styles.add} placeholder='Type your postcode or address' prefix={<EnvironmentFilled />} />
        </div>
        <div >
          <button className={Styles.btn}>Get Started With Solar</button>
        </div>
      </div>
    </div>
  )
}

export default index