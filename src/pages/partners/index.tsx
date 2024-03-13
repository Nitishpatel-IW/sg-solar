import Navbar from '../../components/navbar/index';
import Installer from '../../components/becomeInstaller/index';
import variables from './varible';

const Partner = () => {
  return (
    <div>
        <Navbar 
                bgColor={variables.backgroundColor} 
                logoSrc={variables.logoSrc} 
                fontColor={variables.rightContainerFontColor} 
                buttonColor={variables.buttonColor} 
                buttonFontColor={variables.buttonFontColor} 
                btnText={variables.btnText}
            />
        <Installer/>
    </div>
  )
}

export default Partner;