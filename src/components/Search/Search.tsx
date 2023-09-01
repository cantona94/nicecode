import styles from './Search.module.scss';
import SearchIcon from '../../assets/search.svg';
import FilterIcon from '../../assets/filter.svg';
import UserNewIcon from '../../assets/userNew.svg';
import CloseSearchIcon from '../../assets/closeSearch.svg';
import { useState } from 'react';

export const Search = () => {
  const [focused, setFocused] = useState(false);
  const [textSearch, setTextSearch] = useState('');
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextSearch(e.target.value);
  };

  return (
    <div className={styles.search}>
      <SearchIcon className={focused ? styles.svg_focus : styles.svg} />
      <input
        onFocus={onFocus}
        onBlur={onBlur}
        value={textSearch}
        onChange={handleSearch}
      />

      <div className={focused ? styles.close : ''}>
        <FilterIcon className={styles.svg} />
        <UserNewIcon className={styles.svg} />
      </div>
      <div className={focused ? styles.svg : styles.close}>
        <CloseSearchIcon />
      </div>
    </div>
  );
};
