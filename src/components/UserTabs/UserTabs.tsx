import styles from './UserTabs.module.scss';
import BtnAdd from '../../assets/BtnAdd.svg';
import { UserNote } from '../UserNote/UserNote';
import { UserConsultation } from '../UserConsultation/UserConsultation';
import { UserVideo } from '../UserVideo/UserVideo';
import { UserEvent } from '../UserEvent/UserEvent';
import { useState, MouseEvent } from 'react';

const tabs: string[] = ['Заметки', 'Консультации', 'Видео', 'Мероприятия'];

export const UserTabs = () => {
  const [tabActive, setTabActive] = useState<string>(tabs[0]);

  const handleChangeTab = (e: MouseEvent<HTMLElement>) => {
    const btn = e.target as HTMLElement;
    setTabActive(btn.innerText);
  };

  return (
    <>
      <div className={styles.tabs}>
        <button
          onClick={handleChangeTab}
          className={tabActive === tabs[0] ? styles.tabs__item_active : ''}
        >
          Заметки
        </button>
        <div className={styles.tabs__band}></div>
        <button
          onClick={handleChangeTab}
          className={tabActive === tabs[1] ? styles.tabs__item_active : ''}
        >
          Консультации
        </button>
        <div className={styles.tabs__band}></div>
        <button
          onClick={handleChangeTab}
          className={tabActive === tabs[2] ? styles.tabs__item_active : ''}
        >
          Видео
        </button>
        <div className={styles.tabs__band}></div>
        <button
          onClick={handleChangeTab}
          className={tabActive === tabs[3] ? styles.tabs__item_active : ''}
        >
          Мероприятия
        </button>
        <div className={styles.tabs__add}>
          {tabActive === tabs[0] && <button>Новая заметка</button>}
          {tabActive === tabs[1] && <button>Записать</button>}
          {(tabActive === tabs[2] || tabActive === tabs[3]) && (
            <button>Рекомендовать</button>
          )}
          <BtnAdd className={styles.tabs__add_active} />
        </div>
      </div>
      {tabActive === tabs[0] && <UserNote />}
      {tabActive === tabs[1] && <UserConsultation />}
      {tabActive === tabs[2] && <UserVideo />}
      {tabActive === tabs[3] && <UserEvent />}
    </>
  );
};
