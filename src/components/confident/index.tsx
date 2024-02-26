import React from 'react'
import Styles from './confident.module.scss'
import Slider from './slider'
const confident = () => {
    return (
        <div className={Styles.main}>
            <div className={Styles.up}>
                <h1>Become knowledgeable and <br/> <span>confident</span> about solar
                </h1>
                <p>
                    Find all the answers your need about solar with SG Solar Home.
                </p>
                <button className={Styles.btn}>View All Articles</button>
            </div>
            <Slider/>
        </div>
    )
}

export default confident