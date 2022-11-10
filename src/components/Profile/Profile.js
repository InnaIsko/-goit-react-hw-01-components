import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import { ImgAvatar, UserName, UserTag, UserLocation } from './Profile.styled';

export function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Box
      maxWidth="350px"
      borderColor="secondary"
      border="normal"
      borderRadius="md"
      m="20px"
      className="profile"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        p="35px"
        className="description"
      >
        <ImgAvatar src={avatar} alt="User avatar" className="avatar" />
        <UserName className="name">{username}</UserName>
        <UserTag className="tag">{tag}</UserTag>
        <UserLocation className="location">{location}</UserLocation>
      </Box>

      <Box
        as="ul"
        display="flex"
        bg="secondary"
        justifyContent="space-around"
        alignItems="center"
        className="stats"
        p="0"
        m="0"
        minHeight="60px"
      >
        <Box as="li" display="flex" flexDirection="column">
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </Box>
        <Box as="li" display="flex" flexDirection="column">
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </Box>
        <Box as="li" display="flex" flexDirection="column">
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </Box>
      </Box>
    </Box>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
