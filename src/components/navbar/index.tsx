import Logo from '../../assets/logo.jpg'
import React, { useRef } from 'react';
import Styles from './navbar.module.scss'
import { Layout, Menu, Row, Col, Collapse } from 'antd';
import { menuItems } from './content'
// import { useState } from 'react';
// import { Drawer, Button } from 'antd';
// const { Header } = Layout;
// import { FaBars, FaTimes } from "react-icons/fa";

const index: React.FC = () => {

	return (

		<Row className={Styles.row}>
			<Col className={Styles.left} span={4} >
				<img src={Logo} />
			</Col>
			<Row className={Styles.rightContainer}>

				<Col className={Styles.right} span={20}>
					<Menu className={Styles.menu} mode="horizontal" items={menuItems} border-bottom="none" ></Menu>
				</Col>
				<Col className={Styles.btnContainer} span={4}>
					<button className={Styles.btn}>Get started</button>
				</Col>
			</Row>
		</Row>
	);
};

// const Index: React.FC = () => {
//   const navRef = useRef<HTMLInputElement>();

// 	const showNavbar = () => {
//     if(navRef!=null){
// 		//   navRef.current.classList.toggle(
// 		// 	"responsive_nav"
// 		// );
//     }
// 	};

// 	return (
// 		<header>
// 			<h3>LOGO</h3>
// 			{/* <nav ref={navRef}>
// 				<a href="/#">Home</a>
// 				<a href="/#">My work</a>
// 				<a href="/#">Blog</a>
// 				<a href="/#">About me</a>
// 				<button
// 					className="nav-btn nav-close-btn"
// 					onClick={showNavbar}>
// 					<FaTimes />
// 				</button>
// 			</nav> */}
// 			<button
// 				className="nav-btn"
// 				onClick={showNavbar}>
// 				<FaBars />
// 			</button>
// 		</header>
// 	);
// };

export default index;

