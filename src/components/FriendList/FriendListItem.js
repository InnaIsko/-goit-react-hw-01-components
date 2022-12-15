import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import { FriendName, StatusFriend } from './FriendList.styled';

export function FriendListItem(onFriendInfo) {
  return (
    <Box
      as="li"
      display="flex"
      minWidth="300px"
      bg="accent"
      boxShadow="box"
      mb="20px"
      p="10px"
    >
      <StatusFriend
        isOnline={onFriendInfo.onFriendInfo.isOnline}
      ></StatusFriend>
      <img
        src={onFriendInfo.onFriendInfo.avatar}
        alt="User avatar"
        width="48"
      />
      <FriendName>{onFriendInfo.onFriendInfo.name}</FriendName>
    </Box>
  );
}

FriendListItem.propTypes = {
  onFriendInfo: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
