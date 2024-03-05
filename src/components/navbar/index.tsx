// Navbar.tsx
import React from 'react';
import styles from './navbar.module.scss';
import { Layout, Menu, Row, Col } from 'antd';
import { menuItems } from './content';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.jpg'
import { DownOutlined } from '@ant-design/icons';
interface NavbarProps {
  backgroundColor?: string;
  logoSrc?: string;
  rightContainerFontColor?: string;
  buttonColor?: string;
  buttonFontColor?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  backgroundColor,
  logoSrc,
  rightContainerFontColor,
  buttonColor,
  buttonFontColor,
}) => {
  return (
    <Row justify={'center'} className={styles.mainRow}>
      <Col span={18} className={styles.mainCol}>
        <Row className={styles.innerRow} justify={'space-between'}>
          <Col span={6} className={styles.logoSec}>
            <Link to='/'>
              <img src={Logo} className={styles.img} />
            </Link>
          </Col>
          <Col span={14} className={styles.item}>
            <Menu className={styles.menu} mode="horizontal" items={menuItems} style={{ borderBottom: 'none', textDecoration: 'none', fontSize: '0.6rem', width: '100%', justifyContent: 'end' }} />
          </Col>
          <Col span={3} className={styles.btnbox}>
            <button className={styles.btn}>Get started</button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Navbar;