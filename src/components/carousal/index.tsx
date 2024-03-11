import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import RectImg from '../../assets/Rectangle1.jpg'
import { Col, Row } from 'antd'

const Carousal = () => {
    const [Y, setY] = useState<number>()
    const refs = useRef(new Array(7))
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
                                <p ref={(el) => { refs.current[0] = el }} style={{ opacity: `${getOpacity(0)}` }} className={styles.text}>Empowered by<br /> Cutting-Edge Technology.</p>
                                <br /><br />
                                <p ref={(el) => { refs.current[1] = el }} style={{ opacity: `${getOpacity(1)}` }} className={styles.text}>Revolutionary Savings,<br/>Guaranteed.</p>
                                <br /><br />
                                <p ref={(el) => { refs.current[2] = el }} style={{ opacity: `${getOpacity(2)}` }} className={styles.text}>Unlocking Energy Independence.</p>
                                <br /><br />
                                <p ref={(el) => { refs.current[3] = el }} style={{ opacity: `${getOpacity(3)}` }} className={styles.text}>Redefining the<br/> Future of Energy.</p>
                                <br /><br />
                                <p ref={(el) => { refs.current[4] = el }} style={{ opacity: `${getOpacity(4)}` }} className={styles.text}>Singapore's Green Evolution Begins.</p>
                                <br /><br />
                                <p ref={(el) => { refs.current[5] = el }} style={{ opacity: `${getOpacity(5)}` }} className={styles.text}>Embrace Energy Independence.</p>
                                <br /><br />
                                <p ref={(el) => { refs.current[6] = el }} style={{ opacity: 0 }} className={styles.text}>Commodi</p>
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