import React, { useEffect, useRef, useState } from 'react'
import styles from './carousal.module.scss'
import RectImg from '../../assets/Rectangle1.jpg'

const Carousal: React.FC = () => {
    const [Y,setY]=useState<number>()
    const refs=useRef(new Array(4))
    const getOpacity=(i:number)=>{
            if(!refs.current[i])return 0
            let height=refs.current[i].getBoundingClientRect().top
            let wHeight=window.innerHeight
            let rH=height/wHeight
            // console.log(height)
            let op=2*(0.5-Math.abs(0.3-rH))
            // console.log(op)
            return op
    }
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setY(window.scrollY);
        }
        )
    },[])
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
                        <div className={styles.heading}>
                            <h3 ref={(el)=>{refs.current[0]=el}} style={{opacity:`${getOpacity(0)}`}} className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                            <h3 ref={(el)=>{refs.current[1]=el}} style={{opacity:`${getOpacity(1)}`}} className={styles.text}>Deserunt fugiat mollitia libero odio est in tenetur</h3>
                            <h3 ref={(el)=>{refs.current[2]=el}} style={{opacity:`${getOpacity(2)}`}} className={styles.text}>Error explicabo nulla quis, ipsum eius fuga accusamus nobis.</h3>
                            <h3 ref={(el)=>{refs.current[3]=el}} style={{opacity:`${getOpacity(3)}`}} className={styles.text}>Commodi quae eveniet voluptate. Tempora, rerum architecto quo.</h3>
                        </div>
                    </div>

                </div>
            </div>


        </div >
    )
}

export default Carousal