import React from 'react'
import styles from './styles.module.scss'
import { Col, Row } from 'antd';
import CustomBtn from '../buttons/orangeButton';
import { useNavigate } from 'react-router-dom'

const Header: React.FC = () => {

      const navigate = useNavigate();

      const handleClick = () => {
            localStorage.removeItem('token')
            navigate('/')
      }
      return (
            <header className={styles.main}>
                  <span className={styles.head}>
                        SGD 10,000 SOL Roof Guarantee for your roof
                  </span>
                  <span className={styles.btn}>
                        <CustomBtn onClick={handleClick} padding="8px" fontsize="12px">Logout</CustomBtn>
                  </span>
            </header>
      )
}

export default Header;