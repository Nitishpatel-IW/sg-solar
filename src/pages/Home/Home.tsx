import Navbar from '../../components/navbar/index';
import Header from '../../components/header/index'
import Postal from '../../components/postal/index'
import Video from '../../components/youtube/index'
import Carousal from '../../components/carousal/index'
import Finance from '../../components/finance/index'
import Prot from '../../components/protection/index'
import Expert from '../../components/expert/index'
import Ref from '../../components/referral/index'
import Confident from '../../components/confident/index'
import Faq from '../../components/faqComponent/index'
import Eff from '../../components/efficiency/index'
import Every from '../../components/everyone/index'
import Easy from '../../components/easy/index'
import Optimise from '../../components/optimise/index'
import Lowest from '../../components/compares/index'
import Save from '../../components/savings/index'
import Grid from '../../components/gridComponent/index'
import Scroll from '../../components/scrollbox/index'
import Scroll2 from '../../components/scrollbox2/index'
import Logo from '../../assets/icons/logo.jpg'
const Home = () => {

    const backgroundColor = '#fff8f5';
    const logoSrc = Logo;
    const FontColor = '#fff';
    const buttonColor = '#FB8500';
    const buttonFontColor = '#fff';
    const btnText = 'Get Started';
    return (
        <div>
            <Header />
            <Navbar 
                bgColor={backgroundColor} 
                logoSrc={logoSrc} 
                fontColor={FontColor} 
                buttonColor={buttonColor} 
                buttonFontColor={buttonFontColor}
                btnText ={btnText} 
            />
            <Postal />
            <Video />
            <Carousal />
            <Finance />
            <Save />
            <Grid />
            <Prot />
            <Lowest />
            <Optimise />
            <Expert />
            <Scroll />
            <Easy />
            <Every />
            <Ref />
            <Scroll2 />
            <Eff />
            <Confident />
            <Faq />
        </div>
    )
}

export default Home