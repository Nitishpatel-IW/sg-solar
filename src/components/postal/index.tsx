import React from 'react';
import styles from './styles.module.scss';
import { EnvironmentFilled } from '@ant-design/icons';
import { Input } from 'antd';

const Postal: React.FC = () => {
  return (
    <div className={styles.main}>
      <h1>
        Solar and <span>Saving</span> for every roof
      </h1>
      <p>
        Visualize solar on your roof and check your potential savings now
      </p>
      <div className={styles.input}>
        <div >
          <Input className={styles.add} placeholder='Type your postcode or address' prefix={<EnvironmentFilled />} />
        </div>
        <div >
          <button className={styles.btn}>Get Started With Solar</button>
        </div>
      </div>
    </div>
  )
}

export default Postal;