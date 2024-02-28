import React from 'react'

import NavBar from '../../components/navbar/index';
import Header from '../../components/header/index'
import Postal from '../../components/postal/index'
import Video from '../../components/youtube/index'
import Carousal from '../../components/carousal/index'
import Finance from '../../components/finance/index'
import Prot from '../../components/protection/index'
import Expert from '../../components/expert/index'
import Ref from '../../components/referral/index'
import Confident from '../../components/confident/index'
import Faq from '../../components/FAQ/index'
// import Foot from '../../components/footer/index'
import Eff from '../../components/Efficiency/index'
import Every from '../../components/everyone/index'
import Easy from '../../components/Easy/index'
import Optimise from '../../components/Optimise/index'
import Lowest from '../../components/Compare/index'
import Save from '../../components/Savings/index'
import Grid from '../../components/Grid/index'
import Scroll from '../../components/scrollbox/index'
import Scroll2 from '../../components/scrollbox2/index'

const Home = () => {
    return (
        <div>
            <Header />
            <NavBar />
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