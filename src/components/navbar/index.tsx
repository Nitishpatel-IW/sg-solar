import React from 'react';
import styles from './styles.module.scss';
import { Menu, Row, Col } from 'antd';
import { menuItems } from './content';
import { Link } from 'react-router-dom';

interface NavbarProps {
  bgColor?: string;
  logoSrc?: string;
  fontColor?: string;
  buttonColor?: string;
  buttonFontColor?: string;
  btnText?:string;
}

const Navbar: React.FC<NavbarProps> =({bgColor,logoSrc,fontColor,buttonColor,buttonFontColor,btnText,}) =>{
  
  return (
    <Row justify={'center'} className={styles.mainRow} style={{backgroundColor:bgColor}} >
      <Col span={18} className={styles.mainCol}>
        <Row className={styles.innerRow} justify={'space-between'}>
          <Col span={6} className={styles.logoSec}>
            <Link to='/'>
              <img src={logoSrc} className={styles.img} />
            </Link>
          </Col>
          <Col span={14} className={styles.item}>
            <Menu className={styles.menu} mode="horizontal" items={menuItems} style={{ borderBottom: 'none', color:fontColor, textDecoration: 'none', fontSize: '0.6rem', width: '100%', justifyContent: 'end' }} />
          </Col>
          <Col span={3} className={styles.btnbox}>
            <button className={styles.btn} style={{backgroundColor:buttonColor, color:buttonFontColor}}>{btnText}</button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Navbar;