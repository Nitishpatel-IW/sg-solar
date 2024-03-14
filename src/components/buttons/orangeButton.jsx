import styles from './styles.module.scss'

const CustomBtn = ({children}) => {
  return (
    <button className = {styles.btn} >{children}</button>
  )
}

export default CustomBtn;