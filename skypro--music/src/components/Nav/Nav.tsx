import styles from "./Nav.module.css"
import Image from "next/image"

export const NavMenu = () => {
    return (
        <nav className={styles.mainNav}>
        <div className={styles.navLogo}>
          <Image className={styles.logoImage} 
            src="/img/logo.png" 
            alt="logo" 
            height={170}
            width={250}
            
            />
        </div>
        <div className={styles.navBurger}>
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </div>
        <div className={styles.navMenu}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <a href="#" className={styles.menuLink}>
                Главное
              </a>
            </li>
            <li className={styles.menuItem}>
              <a href="#" className={styles.menuLink}>
                Мой плейлист
              </a>
            </li>
            <li className={styles.menuItem}>
              <a href="../signin.html" className={styles.menuLink}>
                Войти
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )
}