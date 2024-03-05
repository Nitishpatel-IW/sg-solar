import React from 'react'
import Navbar from '../../components/navbar/index'
import Pagefaq from '../../components/pageFAQ/Index'
import Img from '../../assets/logo.jpg'
const Faq = () => {
  const backgroundColor = '#1781e4';
  const logoSrc = localStorage.getItem('../../assets/logo.jpg');
  const rightContainerFontColor = '#fff';
  const buttonColor = '#fff';
  const buttonFontColor = '#1781e4';
  return (
    <div>
        <Navbar 
                backgroundColor={backgroundColor} 
                logoSrc={logoSrc || ''} 
                rightContainerFontColor={rightContainerFontColor} 
                buttonColor={buttonColor} 
                buttonFontColor={buttonFontColor} 
            />
        <Pagefaq/>    
    </div>
  )
}

export default Faq