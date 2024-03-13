import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Postal from '../../components/postal';
import Video from '../../components/youtube';
import Carousal from '../../components/carousal';
import Finance from '../../components/finance';
import Prot from '../../components/protection';
import Expert from '../../components/expert';
import Ref from '../../components/referral';
import Confident from '../../components/confident';
import Faq from '../../components/faqComponent';
import Eff from '../../components/efficiency';
import Every from '../../components/everyone';
import Easy from '../../components/easy';
import Optimise from '../../components/optimize';
import Lowest from '../../components/compares';
import Save from '../../components/savings';
import Grid from '../../components/gridComponent';
import Scroll from '../../components/scrollbox';
import Scroll2 from '../../components/scrollbox2';
import Logo from '../../assets/icons/logo.jpg';
import variables from './variable';
const Home = () => {
    return (
        <div>
            <Header />
            <Navbar 
                bgColor={variables.backgroundColor} 
                logoSrc={variables.logoSrc} 
                fontColor={variables.FontColor} 
                buttonColor={variables.buttonColor} 
                buttonFontColor={variables.buttonFontColor}
                btnText ={variables.btnText} 
            />
            <Postal />
            <Video videolink={variables.youtubelink}  />
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

export default Home;