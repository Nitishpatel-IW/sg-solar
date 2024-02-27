import { HashLink as Link} from 'react-router-hash-link';
export const menuItems = [
    {
        label: (
        <Link to="#howWework">
            How we Work
        </Link>),
        key: "work",
    },
    {
        label: "Learn about Solar",
        key: "learn",
        children: [
            {
                label: (
                    <a href="/faq" target="_blank" rel="noopener noreferrer">
                      FAQ
                    </a>
                  ),
                key: "faq",
            },
            {
                label: "Articles",
                key: "articles",
            }
        ],
    },
    {
        label: "Become our Partner",
        key: "partner",
        children: [
            {
                label: "For solar installers",
                key: "installer",
            }
        ],
    },
    {
        label: "About us",
        key: "aboutus",
        children: [
            {
                label: "SG solar Homes",
                key: "home",
            },
            {
                label: "Our Projects",
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