import styles from "./SideBar.module.css"
import Image from "next/image"

export const SideBar = () => {
    return (
        <div className={styles.mainSidebar}>
        <div className={styles.sidebarPersonal}>
          <p className={styles.sidebarPersonalName}>Sergey.Ivanov</p>
          <div className={styles.sidebarIcon}>
            <svg>
              <use xlinkHref="/img/icon/sprite.svg#logout" />
            </svg>
          </div>
        </div>
        <div className={styles.sidebarBlock}>
          <div className={styles.sidebarList}>
            <div className={styles.sidebarItem}>
              <a className={styles.sidebarLink} href="#">
                <Image
                  className={styles.sidebarImg}
                  src="/img/playlist01.png"
                  alt="day's playlist"
                  height={170}
                  width={250}
                />
              </a>
            </div>
            <div className={styles.sidebarItem}>
              <a className={styles.sidebarLink} href="#">
                <Image
                  className={styles.sidebarImg}
                  src="/img/playlist02.png"
                  alt="day's playlist"
                  height={170}
                  width={250}
                />
              </a>
            </div>
            <div className={styles.sidebarItem}>
              <a className={styles.sidebarLink} href="#">
                <Image
                  className={styles.sidebarImg}
                  src="/img/playlist03.png"
                  alt="day's playlist"
                  height={170}
                  width={250}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}