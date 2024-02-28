import { HashLink as Link } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
export const menuItems = [
    {
        label: (
            <Link to="/#howWework">
                How we Work
            </Link>
            ),
        key: "work",
    },
    {
        label: "Learn about Solar",
        key: "learn",
        children: [
            {
                label: (
                    <NavLink to="/faq"  rel="noopener noreferrer">
                        FAQ
                    </NavLink>
                ),
                key: "faq",
            },
            {
                label: (
                    <Link to="/#confident">
                        Articles
                    </Link>
                    ),
                key: "articles",
            }
        ],
    },
    {
        label: "Become our Partner",
        key: "partner",
        children: [
            {
                label: (<NavLink to='/partner' >
                    For solar installers
                </NavLink>),
                key: "installer",
            }
        ],
    },
    {
        label: "About us",
        key: "aboutus",
        children: [
            {
                label: (
                    <Link to="/#easy">
                        SG solar Homes
                    </Link>
                ), 
                key: "home",
            },
            {
                label: (
                    <Link to="#projects">
                        Our Projects
                    </Link>
                ), 
                key: "projects",
            }
        ],
    },
    {
        label: "English",
        key: "lang",
        children: [
            {
                label: "English",
                key: "english",
            },
            {
                label: "Burmese",
                key: "burmese",
            }
        ],
    },
]