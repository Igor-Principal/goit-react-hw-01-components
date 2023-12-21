import User from './components/User/User';
import user from './data/user.json';
import Statistics from 'components/Statistics/Statistics';
import data from './data/data.json'


export const App = () => {
  return (
    <main>
      <User items={user} />
      <Statistics title="UPLOAD STATS" items={data} />
    </main>
  );
};
