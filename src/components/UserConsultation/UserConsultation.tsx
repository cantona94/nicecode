import styles from './UserConsultation.module.scss';
import CameraIcon from '../../assets/camera.svg';
import CameraActiveIcon from '../../assets/cameraActive.svg';

export const UserConsultation = () => {
  return (
    <div className={styles.consultation}>
      <div
        className={`${styles.consultation__item} ${styles.consultation__item_active}`}
      >
        <CameraActiveIcon className={styles.consultation__item_icon} />
        <div className={styles.consultation__item_info}>
          <h4>Online консультация</h4>
          <p>15.01.2019, 12:30-13</p>
        </div>
      </div>
      <div className={styles.consultation__item}>
        <CameraIcon className={styles.consultation__item_icon} />
        <div className={styles.consultation__item_info}>
          <h4>Online консультация</h4>
          <p>15.01.2019, 12:30-13</p>
        </div>
      </div>
      <div className={styles.consultation__item}>
        <CameraIcon className={styles.consultation__item_icon} />
        <div className={styles.consultation__item_info}>
          <h4>Online консультация</h4>
          <p>15.01.2019, 12:30-13</p>
        </div>
        <span>Не подтверждена</span>
      </div>
    </div>
  );
};
