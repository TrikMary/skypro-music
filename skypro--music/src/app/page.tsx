





import { Bar } from "@/components/Bar/Bar";
import { NavMenu } from "@/components/Nav/Nav";
import { SideBar } from "@/components/SideBar/SideBar";
import { MainCenterBlock } from "@/components/MainCenterBlock/MainCenterBlock";
import styles from "./page.module.css"


export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
        <NavMenu />
        <MainCenterBlock />
        <SideBar />
        </main>
        <Bar />
        <footer></footer>
      </div>
    </div>
  );
}
