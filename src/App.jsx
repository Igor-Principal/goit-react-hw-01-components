import User from './components/User/User';
import user from './data/user.json';
import Statistics from 'components/Statistics/Statistics';
import data from './data/data.json'
import FriendList from 'components/FriendList/FriendList';
import friends from './data/friends.json'
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import transactions from "./data/transactions"


export const App = () => {
  return (
    <main>
      <User items={user} />
      <Statistics title="UPLOAD STATS" items={data} />
      <FriendList items={friends} />
      <TransactionHistory items={transactions} />
    </main>
  );
};
