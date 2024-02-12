import React from 'react'
import { Link } from 'react-router-dom';
// import logo from '../assets/logo.jpg'
let NavBar: React.FC = () => {
    return (
        <div className='main'>
            <div className='inner-main'>

                <div className='Logo'>
                    <img src="{logo}" alt="Logo" />
                </div>
                <div className='menu'>
                    <div className='menu1'>
                        <p>How we work</p>
                        <p>Learn about Solar</p>
                        <p>Become our Partner</p>
                        <p>About us</p>

                    </div>
                    <div className='menu2'>
                        <p>globe</p>
                        <button>Get started with solar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar