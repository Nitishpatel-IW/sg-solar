import React, { useEffect, useRef, useState } from 'react'
import Styles from './carousal.module.scss'
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
        <div className={Styles.main}>
            <div className={Styles.wrap}>
                <div className={Styles.sticky}>
                    <div className={Styles.bannerImg}>

                        <img className={Styles.img} src={RectImg} />
                    </div>
                </div>
                <div className={Styles.content}>
                    <div className={Styles.wrapper}>
                        <div className={Styles.heading}>
                            <h3 ref={(el)=>{refs.current[0]=el}} style={{opacity:`${getOpacity(0)}`}} className={Styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                            <h3 ref={(el)=>{refs.current[1]=el}} style={{opacity:`${getOpacity(1)}`}} className={Styles.text}>Deserunt fugiat mollitia libero odio est in tenetur</h3>
                            <h3 ref={(el)=>{refs.current[2]=el}} style={{opacity:`${getOpacity(2)}`}} className={Styles.text}>Error explicabo nulla quis, ipsum eius fuga accusamus nobis.</h3>
                            <h3 ref={(el)=>{refs.current[3]=el}} style={{opacity:`${getOpacity(3)}`}} className={Styles.text}>Commodi quae eveniet voluptate. Tempora, rerum architecto quo.</h3>
                        </div>
                    </div>

                </div>
            </div>


        </div >
    )
}

export default Carousal