import styles from './CardUser.module.scss';
import Avatar from '../../assets/avatar.png';
import SvgPopup from '../../assets/svgPopup.svg';
import { useState } from 'react';

export const CardUser = () => {
  const [visiblePopup, setVisiblePopup] = useState(false);

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  return (
    <div className={styles.card}>
      <img src={Avatar} alt="avatar" />
      <div className={styles.card__info}>
        <h4>Рожков Денис Петрович</h4>
        <span>30 лет, Мужчина</span>
      </div>
      <div className={styles.card__popup}>
        <SvgPopup
          onClick={toggleVisiblePopup}
          className={
            visiblePopup
              ? `${styles.card__popup_active} ${styles.popup_active}`
              : styles.card__popup_active
          }
        />
        {visiblePopup && (
          <div className={styles.card__popup_open}>
            <ul>
              <li>Изменить</li>
              <li>Удалить</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
