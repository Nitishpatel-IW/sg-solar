import React from 'react'
import Navbar from '../../components/navbar/index'
import Installer from '../../components/Become/Isnstaller/index'
import Logo from '../../assets/logoWhite.jpg'
const Partner = () => {
  const backgroundColor = '#FB8500';
  const logoSrc = Logo;
  const rightContainerFontColor = '#fff';
  const buttonColor = '#fff';
  const buttonFontColor = '#FB8500';
  const btnText = 'Become Partner'
  return (
    <div>
        <Navbar 
                bgColor={backgroundColor} 
                logoSrc={logoSrc} 
                fontColor={rightContainerFontColor} 
                buttonColor={buttonColor} 
                buttonFontColor={buttonFontColor} 
                btnText={btnText}
            />
        <Installer/>
    </div>
  )
}

export default Partner