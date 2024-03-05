import React from 'react'
import Navbar from '../../components/navbar/index'
import Installer from '../../components/Become/Isnstaller/index'
const Partner = () => {
  const backgroundColor = '#FB8500';
  const logoSrc = 'your_logo_source_here';
  const rightContainerFontColor = '#fff';
  const buttonColor = '#fff';
  const buttonFontColor = '#FB8500';
  return (
    <div>
        <Navbar 
                backgroundColor={backgroundColor} 
                logoSrc={logoSrc} 
                rightContainerFontColor={rightContainerFontColor} 
                buttonColor={buttonColor} 
                buttonFontColor={buttonFontColor} 
            />
        <Installer/>
    </div>
  )
}

export default Partner