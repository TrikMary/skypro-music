import styles from "./MainCenterBlock.module.css"
import { Filter } from "../Filters/Filters"
import { PlayList } from "../PlayList/PlayList"
import { Search } from "../Search/Search"
import classNames from "classnames"


export const MainCenterBlock = () => {
    return (
    <div className={styles.mainCenterblock}>
    <Search />
     <h2 className={styles.centerblockH2}>Треки</h2>
     <Filter />
     <div className={styles.centerblockContent}>
       <div className={styles.contentTitle}>
         <div className={classNames(styles.playlistTitleCol, styles.col01)} >Трек</div>
         <div className={classNames(styles.playlistTitleCol, styles.col02)} >Исполнитель</div>
         <div className={classNames(styles.playlistTitleCol, styles.col03)} >Альбом</div>
         <div className={classNames(styles.playlistTitleCol, styles.col04)} >
           <svg className={styles.playlistTitleSvg}>
             <use xlinkHref="/img/icon/sprite.svg#icon-watch" />
           </svg>
         </div>
       </div>
       <PlayList />
     </div>
   </div>
    )
}