import React, { useState } from 'react'
import Styles from './faq.module.scss'
import { content } from './questionsBank'


const Accordian = () => {
    const [selected,setSelected] = useState(-1)
    const toggle=(i:number)=>{
        if( selected==i){
            return setSelected(-1)
        }
        setSelected(i)
    }
  return (
    <div className={Styles.wrapper}>
        <div className={Styles.accordian}>
            {content.map((item,i)=>(
                <div className={Styles.item}>
                    <div className={Styles.title} onClick={()=> toggle(i)}>
                        <p>{item.question}</p>
                        <span>{selected===i?'-':'+'}</span>
                    </div>
                    <div className={Styles[selected===i?'showContent':'content']}>{item.answer}</div>
                </div>
            )
            )}
        </div>
    </div>
  )
}

export default Accordian