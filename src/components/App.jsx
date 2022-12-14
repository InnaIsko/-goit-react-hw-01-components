import user from './DocumentsJson/user.json';
import data from './DocumentsJson/data.json';
import friends from './DocumentsJson/friends.json';
import transactions from './DocumentsJson/transactions.json';
import { Box } from 'components/Box';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <Box
      bg="body"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Box>
  );
};
