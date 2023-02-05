import SearchBar from 'components/SearchBar'
import styles from './Header.module.css'
import logo from './logo.png'

export const Header = () =>{
    return(
        <header className={styles.header}>
            <img src={logo} alt='Logo do site' />
            <h2>Mercado Gamer</h2>
            <div className={styles.shearchBar}><SearchBar/></div>
        </header>
    )
}

export default Header