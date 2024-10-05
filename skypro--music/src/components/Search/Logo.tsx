import styles from "./Search.module.css"

export const Logo = () => {
    return (
        <svg className={styles.searchSvg}>
        <use xlinkHref="/img/icon/sprite.svg#icon-search" />
      </svg>
    )
}