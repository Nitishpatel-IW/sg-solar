import React from 'react'
import Navbar from '../../components/navbar/index'
import Pagefaq from '../../components/pageFAQ/Index'
import Logo from '../../assets/logoWhite.jpg'
const Faq = () => {
  const bgColor = '#1781e4';
  const logoSrc = Logo;
  const rightContainerFontColor = '#fff';
  const buttonColor = '#fff';
  const buttonFontColor = '#1781e4';
  const btnText='Get Started'
  return (
    <div>
        <Navbar 
                bgColor={bgColor} 
                logoSrc={logoSrc} 
                fontColor={rightContainerFontColor} 
                buttonColor={buttonColor} 
                buttonFontColor={buttonFontColor} 
                btnText={btnText}
            />
        <Pagefaq/>    
    </div>
  )
}

export default Faq