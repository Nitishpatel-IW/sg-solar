import React from 'react';
import styles from './styles.module.scss';
import { Menu, Row, Col, ConfigProvider } from 'antd';
import { menuItems } from './content';
import { Link } from 'react-router-dom';
import CustomBtn from '../buttons/orangeButton';
import Item from 'antd/es/list/Item';

interface NavbarProps {
  bgColor?: string;
  logoSrc?: string;
  fontColor?: string;
  buttonColor?: string;
  buttonFontColor?: string;
  btnText?: string;
}

const Navbar: React.FC<NavbarProps> = (props) => {

  return (
    <Row justify={'center'} className={styles.mainRow} style={{ backgroundColor: props.bgColor }} >
      <Col span={18} className={styles.mainCol}>
        <Row className={styles.innerRow} justify={'space-between'}>
          <Col span={6} className={styles.logoSec}>
            <Link to='/home'>
              <img src={props.logoSrc} className={styles.img} />
            </Link>
          </Col>
          <Col span={14} className={styles.item}>
            <ConfigProvider
              theme={{
                components: {
                  Menu:{
                      itemSelectedColor:'black',
                      darkItemSelectedBg:'none',
                      horizontalItemHoverColor: 'transparent',
                  },
                },
              }}
            >
              <Menu className={styles.menu} mode="horizontal" items={menuItems} style={{ borderBottom: 'none', textDecoration: 'none', fontSize: '0.6rem', width: '100%', justifyContent: 'end' }} />
            </ConfigProvider>
          </Col>
          <Col span={3} className={styles.btnbox}>
            <CustomBtn bgColor={props.buttonColor} padding='11px 24px' fontsize='14px' textColor={props.buttonFontColor}>{props.btnText}</CustomBtn>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Navbar;