import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import {
  ImgAvatar,
  UserName,
  UserInfo,
  ProfileName,
  ProfileInfo,
} from './Profile.styled';

export function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Box maxWidth="300px" m="20px" boxShadow="box">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        pb="40px"
        pt="40px"
        bg="accent"
      >
        <ImgAvatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserInfo>{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Box>

      <Box
        as="ul"
        display="flex"
        bg="secondary"
        justifyContent="space-around"
        alignItems="center"
        p="0"
        m="0"
        minHeight="80px"
      >
        <Box as="li" display="flex" flexDirection="column">
          <ProfileName>Followers</ProfileName>
          <ProfileInfo>{stats.followers}</ProfileInfo>
        </Box>
        <Box as="li" display="flex" flexDirection="column">
          <ProfileName>Views</ProfileName>
          <ProfileInfo>{stats.views}</ProfileInfo>
        </Box>
        <Box as="li" display="flex" flexDirection="column">
          <ProfileName>Likes</ProfileName>
          <ProfileInfo>{stats.likes}</ProfileInfo>
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
