import styles from './UserNote.module.scss';
import noteImg from '../../assets/noteImg.png';
import SvgPopup from '../../assets/svgPopup.svg';
import { useState } from 'react';

export const UserNote = () => {
  const [visiblePopupOne, setVisiblePopupOne] = useState(false);
  const [visiblePopupSecond, setVisiblePopupSecond] = useState(false);

  const toggleVisiblePopupOne = () => {
    setVisiblePopupOne(!visiblePopupOne);
  };

  const toggleVisiblePopupSecond = () => {
    setVisiblePopupSecond(!visiblePopupSecond);
  };

  return (
    <div className={styles.notes}>
      <div className={styles.notes__item}>
        <div className={styles.notes__item_text}>
          <p>
            <span>20.12.2019 </span>
            Физические упражнения способствуют активизации мышечных сокращений,
            кровотока в тканях, снимают отечность, повышают энергетические
            возможности мышц. Улучшенное питание мышечной ткани ускоряет
            замещение различных посттравматических дефектов в самих мышцах,
            костной ткани, связках и сухожилиях.
          </p>
          <SvgPopup
            onClick={toggleVisiblePopupOne}
            className={
              visiblePopupOne
                ? `${styles.notes__popup_active} ${styles.popup_active}`
                : styles.notes__popup_active
            }
          />
          {visiblePopupOne && (
            <div className={styles.notes__popup_open}>
              <ul>
                <li>Изменить</li>
                <li>Удалить</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className={styles.notes__item}>
        <div className={styles.notes__item_text}>
          <p>
            <span>20.12.2019 </span>
            Улучшенное питание мышечной ткани ускоряет замещение различных
            посттравматических дефектов в самих мышцах, костной ткани, связках и
            сухожилиях.
          </p>
          <SvgPopup
            onClick={toggleVisiblePopupSecond}
            className={
              visiblePopupSecond
                ? `${styles.notes__popup_active} ${styles.popup_active}`
                : styles.notes__popup_active
            }
          />
          {visiblePopupSecond && (
            <div className={styles.notes__popup_open}>
              <ul>
                <li>Изменить</li>
                <li>Удалить</li>
              </ul>
            </div>
          )}
        </div>
        <img src={noteImg} alt="img" />
      </div>
    </div>
  );
};
