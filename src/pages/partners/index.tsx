import Navbar from '../../components/navbar/index';
import Installer from '../../components/becomeInstaller/index';
import variables from './varible';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Partner = () => {
  
  const navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem('token')){
        navigate('/');
    }
  },[])
  return (
    <div>
        <Navbar {...variables}/>
        <Installer/>
    </div>
  )
}

export default Partner;