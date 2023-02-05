import styles from './SearchBar.module.css'
import { FcSearch } from "react-icons/fc"

export const SearchBar = () => {

    return (
        <div className={styles.searchBar}>
            <FcSearch size={36} />
            <input placeholder='Pesquise aqui...' type='text' />
        </div>
    )
}

export default SearchBar;