import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';

export function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(friend => (
        <FriendListItem key={friend.id} onFriendInfo={friend} />
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  friends: PropTypes.array,
};
