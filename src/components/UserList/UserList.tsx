import { UserBillet } from '../UserBillet/UserBillet';
import styles from './UserList.module.scss';
import AvatarUser from '../../assets/avatar.png';
import AvatarUser2 from '../../assets/avatar2.png';
import TelegrmIcon from '../../assets/telegramIcon.png';
import ErrorIcon from '../../assets/error.png';
import { IUsers } from '../../types/types';
import { useEffect, useState } from 'react';

const users: IUsers[] = [
  {
    avatar: AvatarUser2,
    name: 'Кравцова Александра',
    status: TelegrmIcon,
  },
  {
    avatar: AvatarUser,
    name: 'Рожков Денис',
    status: null,
    active: true,
  },
  {
    avatar: AvatarUser2,
    name: 'Кравцова Александра',
    status: ErrorIcon,
  },
  {
    avatar: AvatarUser2,
    name: 'Кравцова Александра',
    status: null,
  },
  {
    avatar: AvatarUser2,
    name: 'Кравцова Александра',
    status: null,
  },
  {
    avatar: AvatarUser,
    name: 'Рожков Денис',
    status: null,
  },
  {
    avatar: AvatarUser,
    name: 'Рожков Денис',
    status: null,
  },
  {
    avatar: AvatarUser,
    name: 'Рожков Денис',
    status: null,
  },
  {
    avatar: AvatarUser,
    name: 'Рожков Денис',
    status: null,
  },
  {
    avatar: AvatarUser,
    name: 'Рожков Денис',
    status: null,
  },
  {
    avatar: AvatarUser,
    name: 'Рожков Денис',
    status: null,
  },
  {
    avatar: AvatarUser,
    name: 'Рожков Денис',
    status: null,
  },
];

export const UserList = () => {
  const [checkedCount, setCheckboxCount] = useState<number>(0);
  const [checkedAll, setCheckboxAll] = useState(false);
  const [selectUser, setSelectUser] = useState(false);

  const handleChangeCheckedAll = () => {
    setCheckboxAll(!checkedAll);
  };

  const handleChecked = () => {
    setCheckboxCount(0);
    setSelectUser(!selectUser);
    setCheckboxAll(false);
  };

  useEffect(() => {
    if (checkedCount !== users.length) {
      setCheckboxAll(false);
    } else if (checkedCount === users.length) {
      setCheckboxAll(true);
    }
  }, [checkedCount]);

  return (
    <>
      <div className={styles.billet__list}>
        {selectUser ? (
          <div className={styles.checkbox_count}>
            <input
              type="checkbox"
              checked={checkedAll}
              onChange={handleChangeCheckedAll}
            />
            <span>Все</span>
            <span className={styles.billet__count}>{checkedCount}</span>
          </div>
        ) : (
          <div className={styles.checkbox_count}>
            <span
              className={`${styles.billet__count} ${styles.billet__count_gray}`}
            >
              {checkedCount}
            </span>
          </div>
        )}

        {selectUser ? (
          <div>
            <button className={styles.select_btn}>Действия</button>
            <button className={styles.select_btn} onClick={handleChecked}>
              Отменить
            </button>
          </div>
        ) : (
          <div>
            <button className={styles.select_btn} onClick={handleChecked}>
              Выбрать
            </button>
          </div>
        )}
      </div>
      <div className={styles.billet__item}>
        {users.map((user, index) => (
          <UserBillet
            key={index}
            user={user}
            checkedCount={checkedCount}
            setCheckboxCount={setCheckboxCount}
            checkedAll={checkedAll}
            usersCount={users.length}
            selectUser={selectUser}
          />
        ))}
      </div>
    </>
  );
};
