import Navbar from '../../components/navbar/index';
import Pagefaq from '../../components/faqPage/Index';
import variables from './variable';

const Faq = () => {
  return (
    <div>
        <Navbar 
                bgColor={variables.bgColor} 
                logoSrc={variables.logoSrc} 
                fontColor={variables.rightContainerFontColor} 
                buttonColor={variables.buttonColor} 
                buttonFontColor={variables.buttonFontColor} 
                btnText={variables.btnText}
            />
        <Pagefaq/>    
    </div>
  )
}

export default Faq;