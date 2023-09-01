import { UserList } from '../components/UserList/UserList';
import { Search } from '../components/Search/Search';
import { CardUser } from '../components/CardUser/CardUser';
import { UserTabs } from '../components/UserTabs/UserTabs';

export const Home = () => {
  return (
    <>
      <header></header>
      <main>
        <div>
          <Search />
          <UserList />
        </div>
        <div style={{ marginLeft: '20px' }}>
          <CardUser />
          <UserTabs />
        </div>
      </main>
    </>
  );
};
