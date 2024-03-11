import { HashLink as Link } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import EnglishFlag from '../../assets/icons/eng.jpg';
import BurmeseFlag from '../../assets/icons/mymar.jpg';

interface MenuItem {
    key: string;
    label: JSX.Element;
    children?: MenuItem[];
  }
  
  export const menuItems: MenuItem[] = [
    {
      key: "work",
      label: (
        <Link to="/#howWework" style={{ textDecoration: 'none' }}>
          How we Work
        </Link>
      ),
    },
    {
      key: "learn",
      label: (
        <div>
          Learn about Solar <DownOutlined style={{ fontSize: '0.6rem' }} />
        </div>
      ),
      children: [
        {
          key: "faq",
          label: (
            <NavLink to="/faq" rel="noopener noreferrer">
              FAQ
            </NavLink>
          ),
        },
        {
          key: "articles",
          label: (
            <Link to="/#confident">
              Articles
            </Link>
          ),
        }
      ],
    },
    {
      key: "partner",
      label: (
        <div>
          Become our Partner <DownOutlined style={{ fontSize: '0.6rem' }} />
        </div>
      ),
      children: [
        {
          key: "installer",
          label: (
            <NavLink to='/partner' >
              For solar installers
            </NavLink>
          ),
        }
      ],
    },
    {
      key: "aboutus",
      label: (
        <div>
          About us <DownOutlined style={{ fontSize: '0.6rem' }} />
        </div>
      ),
      children: [
        {
          key: "home",
          label: (
            <Link to="/#easy">
              SG solar Homes
            </Link>
          ),
        },
        {
          key: "projects",
          label: (
            <Link to="#projects">
              Our Projects
            </Link>
          ),
        }
      ],
    },
    {
      key: "lang",
      label: (
        <div>
          <img src={EnglishFlag} alt="English Flag" style={{ marginRight: '4px', width: '0.6rem', height: '0.6rem' }} />
          English <DownOutlined style={{ fontSize: '0.6rem' }} />
        </div>
      ),
      children: [
        {
          key: "english",
          label: (
            <div>
              <img src={EnglishFlag} alt="English Flag" style={{ marginRight: '4px', width: '0.6rem', height: '0.6rem' }} />
              English
            </div>
          ),
        },
        {
          key: "burmese",
          label: (
            <div >
              <img src={BurmeseFlag} alt="Burmese Flag" style={{ marginRight: '4px', width: '0.6rem', height: '0.6rem' }} />
              Burmese
            </div>
          ),
        }
      ],
    },
  ];
  
