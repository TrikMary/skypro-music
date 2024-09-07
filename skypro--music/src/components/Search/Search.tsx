

import styles from "./Search.module.css";
import { Logo } from "./Logo";

export const Search = () => {
    return (
        <div className= {styles.centerblockSearch}>
            <Logo />
        <input
          className={styles.searchText}
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
    )    
}

