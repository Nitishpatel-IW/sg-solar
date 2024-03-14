import Navbar from '../../components/navbar/index';
import Installer from '../../components/becomeInstaller/index';
import variables from './varible';

const Partner = () => {
  return (
    <div>
        <Navbar {...variables}/>
        <Installer/>
    </div>
  )
}

export default Partner;