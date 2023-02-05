import styles from './CustomButton.module.css'

export const CustomButton = ({children}) =>{
    return(
        <button className={styles.customButton}>
            {children}
        </button>
    )
}

export default CustomButton