import Navbar from '../../components/navbar/index';
import Pagefaq from '../../components/faqPage/Index';
import variables from './variable';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Faq = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem('token')){
        navigate('/');
    }
  },[])
  return (
    <div>
        <Navbar {...variables}/>
        <Pagefaq/>    
    </div>
  )
}

export default Faq;