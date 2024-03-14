import Navbar from '../../components/navbar/index';
import Pagefaq from '../../components/faqPage/Index';
import variables from './variable';

const Faq = () => {
  return (
    <div>
        <Navbar {...variables}/>
        <Pagefaq/>    
    </div>
  )
}

export default Faq;