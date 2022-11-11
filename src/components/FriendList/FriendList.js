import { Box } from 'components/Box';
import { FriendName, StatusFriend } from './FriendList.styled';
import PropTypes from 'prop-types';

export function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(friend => (
        <Box
          as="li"
          display="flex"
          minWidth="300px"
          bg="accent"
          boxShadow="box"
          mb="20px"
          p="10px"
          key={friend.id}
        >
          <StatusFriend isOnline={friend.isOnline}></StatusFriend>
          <img src={friend.avatar} alt="User avatar" width="48" />
          <FriendName>{friend.name}</FriendName>
        </Box>
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
