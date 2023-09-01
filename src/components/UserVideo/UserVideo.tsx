import styles from './UserVideo.module.scss';
import video1Icon from '../../assets/video1.png';
import video2Icon from '../../assets/video2.png';
import video3Icon from '../../assets/video3.png';

export const UserVideo = () => {
  return (
    <div className={styles.video}>
      <div className={styles.video__item}>
        <img src={video1Icon} alt="video" />
        <div className={styles.video__item_info}>
          <h4>Крабик, ходьба в бок в приседе с двумя резинками Кра…</h4>
          <p>Астахова Е.В.</p>
        </div>
      </div>
      <div className={styles.video__item}>
        <img src={video2Icon} alt="video" />
        <div className={styles.video__item_info}>
          <h4>Разминка для локтевого сустава</h4>
          <p>Астахова Е.В.</p>
        </div>
        <span>15.01.2019 - 22.01.2019</span>
      </div>
      <div className={styles.video__item}>
        <img src={video3Icon} alt="video" />
        <div className={styles.video__item_info}>
          <h4>Разминка для локтевого суставаРазминка для локтевого..</h4>
          <p>Астахова Е.В.</p>
        </div>
        <span>15.01.2019 - 22.01.2019</span>
      </div>
    </div>
  );
};
