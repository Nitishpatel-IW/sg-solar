import React, { useEffect, useRef, useState } from 'react'
import styles from './carousal.module.scss'
import RectImg from '../../assets/Rectangle1.jpg'
import { Col, Row } from 'antd'

const Carousal = () => {
    const [Y, setY] = useState<number>()
    const refs = useRef(new Array(8))
    const getOpacity = (i: number) => {
        if (!refs.current[i]) return 0;

        const rect = refs.current[i].getBoundingClientRect();
        const distanceFromTop = rect.top;
        const maxDistanceForFullOpacity = window.innerHeight * 0.4;
        const maxDistanceForOpacityDecrease = window.innerHeight * 0.6;
        const maxDistanceForOpacityZero = window.innerHeight * 0.1;

        let opacity = 1;

        if (distanceFromTop > maxDistanceForOpacityDecrease) {
            opacity = 0;
        } else if (distanceFromTop > maxDistanceForFullOpacity) {
            opacity = 1 - (distanceFromTop - maxDistanceForFullOpacity) / (maxDistanceForOpacityDecrease - maxDistanceForFullOpacity);
        }
        if (distanceFromTop < maxDistanceForOpacityZero) {
            opacity = 0;
        }
        else if(distanceFromTop > maxDistanceForOpacityZero && distanceFromTop < maxDistanceForFullOpacity)
        {
            opacity = 1- (maxDistanceForFullOpacity -distanceFromTop) / (maxDistanceForOpacityDecrease - maxDistanceForFullOpacity);
        }
        return Math.max(0, Math.min(opacity, 1));
    };


    useEffect(() => {
        window.addEventListener("scroll", () => {
            setY(window.scrollY);
        }
        )
    }, [])
    return (
        <div className={styles.main}>
            <div className={styles.wrap}>
                <div className={styles.sticky}>
                    <div className={styles.bannerImg}>
                        <img className={styles.img} src={RectImg} />
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.wrapper}>
                        <Row className={styles.heading}>
                            <Col span={18}>
                            <h3 ref={(el) => { refs.current[0] = el }} style={{ opacity:0}} className={styles.text}>Empowered by<br /> Cutting-Edge Technology.</h3>
                                <br /><br />
                                <h3 ref={(el) => { refs.current[1] = el }} style={{ opacity: `${getOpacity(1)}` }} className={styles.text}>Empowered by<br /> Cutting-Edge Technology.</h3>
                                <br /><br />
                                <h3 ref={(el) => { refs.current[2] = el }} style={{ opacity: `${getOpacity(2)}` }} className={styles.text}>Revolutionary Savings,<br/>Guaranteed.</h3>
                                <br /><br />
                                <h3 ref={(el) => { refs.current[3] = el }} style={{ opacity: `${getOpacity(3)}` }} className={styles.text}>Unlocking Energy Independence.</h3>
                                <br /><br />
                                <h3 ref={(el) => { refs.current[4] = el }} style={{ opacity: `${getOpacity(4)}` }} className={styles.text}>Redefining the<br/> Future of Energy.</h3>
                                <br /><br />
                                <h3 ref={(el) => { refs.current[5] = el }} style={{ opacity: `${getOpacity(5)}` }} className={styles.text}>Singapore's Green Evolution Begins.</h3>
                                <br /><br />
                                <h3 ref={(el) => { refs.current[6] = el }} style={{ opacity: `${getOpacity(6)}` }} className={styles.text}>Embrace Energy Independence.</h3>
                                <br /><br />
                                <h3 ref={(el) => { refs.current[7] = el }} style={{ opacity: 0 }} className={styles.text}>Commodi</h3>
                                <br /><br /><br /><br />
                            </Col>
                        </Row>
                    </div>

                </div>
            </div>


        </div >
    );
}

export default Carousal