import React from 'react'
import styles from './confident.module.scss'
import Slider from './slider'
const confident = () => {
    return (
        <div className={styles.main} id='confident'>
            <div className={styles.up}>
                <h1>Become knowledgeable and <br /> <span>confident</span> about solar
                </h1>
                <p>
                    Find all the answers your need about solar with SG Solar Home.
                </p>
                <a href='https://medium.com/@sgsolarhome'>
                    <button className={styles.btn}>View All Articles</button>
                </a>
            </div>
            <Slider />
        </div>
    )
}

export default confident