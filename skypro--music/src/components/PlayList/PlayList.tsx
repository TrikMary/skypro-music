
import styles from "./PlayList.module.css"
import { Track } from "../Track/Track";

{/* Здесь в будущем будет передаваться список песен в пропсах
и создаваться плейлист треков по шаблону Track
пока просто повторяем шаблом несколько раз */}

export const PlayList = () => {
    return (
        <div className={styles.contentPlaylist}>
            <Track />
            <Track />
            <Track />
            <Track />
            <Track />
       
      </div>
    )
}

