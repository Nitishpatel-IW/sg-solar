import React from 'react';
import styles from './styles.module.scss';

interface CustomBtnProps {
  children: React.ReactNode;
  fontsize?: string;
  bgColor?: string;
  textColor?: string;
  border?: string;
  onClick?: () => void;
}
const CustomBtn:React.FC<CustomBtnProps> = ({ children, fontsize ,bgColor, textColor, border, onClick = () => {} , }) => {

  const btnStyle = {
    fontSize: fontsize,
    background: bgColor,
    color: textColor,
    border: border,
  };

  return (
    <button className={styles.btn} style={btnStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomBtn;
