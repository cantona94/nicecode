import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import styles from './UserBillet.module.scss';
import { IUsers } from '../../types/types';

interface IProps {
  user: IUsers;
  checkedCount: number;
  setCheckboxCount: Dispatch<SetStateAction<number>>;
  checkedAll: boolean;
  usersCount: number;
  selectUser: boolean;
}

export const UserBillet: FC<IProps> = ({
  user,
  checkedCount,
  setCheckboxCount,
  checkedAll,
  usersCount,
  selectUser,
}) => {
  const [checked, setChecked] = useState(false);
  const message =
    user.status ===
    'http://localhost:3000/2b528638e19ebe8031e9f4cb575e68ca.png';

  const handleChangeChecked = () => {
    if (checked) {
      setChecked(false);
      setCheckboxCount(--checkedCount);
    } else {
      setChecked(true);
      setCheckboxCount(++checkedCount);
    }
  };

  useEffect(() => {
    if (checkedAll) {
      setChecked(true);
      setCheckboxCount(usersCount);
    } else if (usersCount === checkedCount) {
      setChecked(false);
      setCheckboxCount(0);
    }

    if (!selectUser) {
      setChecked(false);
    }
  }, [checkedAll, selectUser]);

  return (
    <div
      className={
        message
          ? `${styles.billet} ${styles.billet__message}`
          : user?.active
          ? `${styles.billet} ${styles.billet_active}`
          : styles.billet
      }
    >
      {selectUser ? (
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChangeChecked}
        />
      ) : (
        ''
      )}
      <img className={styles.billet__photo} src={user.avatar} alt="avatar" />
      <span className={styles.billet__name}>{user.name}</span>
      {user.status ? (
        <img className={styles.billet__status} src={user.status} alt="icon" />
      ) : (
        <></>
      )}
    </div>
  );
};
