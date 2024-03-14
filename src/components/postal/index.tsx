import React from 'react';
import styles from './styles.module.scss';
import { EnvironmentFilled } from '@ant-design/icons';
import { Input } from 'antd';
import CustomBtn from '../buttons/orangeButton';

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
          <CustomBtn>Get Started With Solar</CustomBtn>
        </div>
      </div>
    </div>
  )
}

export default Postal;