import styles from './UserEvent.module.scss';
import EventPhoto from '../../assets/eventPhoto.png';
import VideoCameraIcon from '../../assets/videoCamera.png';
import CalendarIcon from '../../assets/calendar.png';
import TimeIcon from '../../assets/time.png';

export const UserEvent = () => {
  return (
    <div className={styles.event}>
      <div className={styles.event__item}>
        <img src={EventPhoto} alt="eventPhoto" />
        <div className={styles.event__info}>
          <h4>Тяга резинки в шаге со сгибанием локтя под 90 градусов</h4>
          <div className={styles.event__detali}>
            <div className={styles.event__detali_item}>
              <img src={VideoCameraIcon} alt="VideoCamera" />
              <span>Вебинар</span>
            </div>
            <div className={styles.event__detali_item}>
              <img src={CalendarIcon} alt="Calendar" />
              <span>9.03.2021</span>
            </div>
            <div className={styles.event__detali_item}>
              <img src={TimeIcon} alt="Time" />
              <span>17:00</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.event__item}>
        <img src={EventPhoto} alt="eventPhoto" />
        <div className={styles.event__info}>
          <h4>Тяга резинки в шаге со сгибанием локтя под 90 градусов</h4>
          <div className={styles.event__detali}>
            <div className={styles.event__detali_item}>
              <img src={VideoCameraIcon} alt="VideoCamera" />
              <span>Вебинар</span>
            </div>
            <div className={styles.event__detali_item}>
              <img src={CalendarIcon} alt="Calendar" />
              <span>9.03.2021</span>
            </div>
            <div className={styles.event__detali_item}>
              <img src={TimeIcon} alt="Time" />
              <span>17:00</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.event__item}>
        <img src={EventPhoto} alt="eventPhoto" />
        <div className={styles.event__info}>
          <h4>Тяга резинки в шаге со сгибанием локтя под 90 градусов</h4>
          <div className={styles.event__detali}>
            <div className={styles.event__detali_item}>
              <img src={VideoCameraIcon} alt="VideoCamera" />
              <span>Вебинар</span>
            </div>
            <div className={styles.event__detali_item}>
              <img src={CalendarIcon} alt="Calendar" />
              <span>9.03.2021</span>
            </div>
            <div className={styles.event__detali_item}>
              <img src={TimeIcon} alt="Time" />
              <span>17:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
