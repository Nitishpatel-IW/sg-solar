import React from 'react'
import Call from '../../assets/call.jpg'
import Styles from './faq.module.scss'
import Accordian from './accordian';
const Faq: React.FC = () => {
    return (
        <div className={Styles.main}>
            <div className={Styles.first}>
                <div className={Styles.firstLeft}>
                    <h3>FAQ</h3>
                    <h1><span>Answers</span>to your solar energy questions
                    </h1>
                    <p>
                        If you can't find the answer you're looking for, feel free to reach out to us and we'll be happy to help.
                    </p>
                    <div className={Styles.btnContainer}>
                        <button className={Styles.btn1}>Check out all our resources</button>
                        <img className={Styles.img} src={Call} />
                        <span className={Styles.btn2}>Request a callback </span>
                    </div>

                </div>
                <div className={Styles.firstRight}>
                    <Accordian/>
                </div>
            </div>

        </div>
    );
};

export default Faq;