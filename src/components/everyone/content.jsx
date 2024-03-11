import Img1 from '../../assets/potrait/every1.jpg';
import Img2 from '../../assets/potrait/every2.jpg';
import Img3 from '../../assets/potrait/every3.jpg';
import { NavLink } from 'react-router-dom';

export const Gallery = [
    {
        img: Img1,
        head: "Solutions for Customers",
        para: "Affordable solar solutions that power your home and your wallet",
        btn: "Get solar today",
    },
    {
        img: Img2,
        head: "Business for Vendors",
        para: "Grow and scale your solar business and streamline your operations",
        btn: (
            <NavLink to="/partner" target='_blank' style={{ color: "#fff" }}>
                Register with us Today
            </NavLink>),
    },
    {
        img: Img3,
        head: "Opportunity for Agents",
        para: "Join our Solar Referral Program and help shape the future of energy",
        btn: "",
    },

]