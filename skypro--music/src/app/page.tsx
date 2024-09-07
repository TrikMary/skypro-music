import Image from "next/image";
import styles from "./page.module.css";
import { Search } from "@/components/Search/Search";
import { PlayList } from "@/components/PlayList/PlayList";
import { Filter } from "@/components/Filters/Filters";
import { Bar } from "@/components/Bar/Bar";

export default function Home() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <nav className="main__nav nav">
            <div className="nav__logo logo">
              <Image className="logo__image" 
                src="/img/logo.png" 
                alt="logo" 
                height={170}
                width={250}
                />
            </div>
            <div className="nav__burger burger">
              <span className="burger__line" />
              <span className="burger__line" />
              <span className="burger__line" />
            </div>
            <div className="nav__menu menu">
              <ul className="menu__list">
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Главное
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Мой плейлист
                  </a>
                </li>
                <li className="menu__item">
                  <a href="../signin.html" className="menu__link">
                    Войти
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="main__centerblock centerblock">
           <Search />
            <h2 className="centerblock__h2">Треки</h2>
            <Filter />
            <div className="centerblock__content playlist-content">
              <div className="content__title playlist-title">
                <div className="playlist-title__col col01">Трек</div>
                <div className="playlist-title__col col02">Исполнитель</div>
                <div className="playlist-title__col col03">Альбом</div>
                <div className="playlist-title__col col04">
                  <svg className="playlist-title__svg">
                    <use xlinkHref="/img/icon/sprite.svg#icon-watch" />
                  </svg>
                </div>
              </div>
              <PlayList />
            </div>
          </div>
          <div className="main__sidebar sidebar">
            <div className="sidebar__personal">
              <p className="sidebar__personal-name">Sergey.Ivanov</p>
              <div className="sidebar__icon">
                <svg>
                  <use xlinkHref="/img/icon/sprite.svg#logout" />
                </svg>
              </div>
            </div>
            <div className="sidebar__block">
              <div className="sidebar__list">
                <div className="sidebar__item">
                  <a className="sidebar__link" href="#">
                    <Image
                      className="sidebar__img"
                      src="/img/playlist01.png"
                      alt="day's playlist"
                      height={170}
                      width={250}
                    />
                  </a>
                </div>
                <div className="sidebar__item">
                  <a className="sidebar__link" href="#">
                    <Image
                      className="sidebar__img"
                      src="/img/playlist02.png"
                      alt="day's playlist"
                      height={170}
                      width={250}
                    />
                  </a>
                </div>
                <div className="sidebar__item">
                  <a className="sidebar__link" href="#">
                    <Image
                      className="sidebar__img"
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
        </main>
        <Bar />
        <footer className="footer" />
      </div>
    </div>
  );
}
