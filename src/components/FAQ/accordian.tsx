import React, { useState } from 'react'
import styles from './faq.module.scss'
import { content } from './questionsBank'
import Add from '../../assets/add.jpg'
import Sub from '../../assets/sub.jpg'

const Accordian = () => {
    const [selected,setSelected] = useState(-1)
    const toggle=(i:number)=>{
        if( selected==i){
            return setSelected(-1)
        }
        setSelected(i)
    }
  return (
    <div className={styles.wrapper}>
        <div className={styles.accordian}>
            {content.map((item,i)=>(
                <div className={styles.item}>
                    <div className={styles.title} onClick={()=> toggle(i)}>
                        <p>{item.question}</p>
                        <span>{selected===i?<img src={Sub} className={styles.imgsec}/>:<img src={Add} className={styles.imgsec}/>}</span>
                    </div>
                    <div className={styles[selected===i?'showContent':'content']}>{item.answer}</div>
                </div>
            )
            )}
        </div>
    </div>
  )
}

export default Accordian