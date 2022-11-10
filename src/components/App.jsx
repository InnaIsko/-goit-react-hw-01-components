import user from '../user.json';
// import PropTypes from 'prop-types';
import { Profile } from './Profile/Profile';
// import { Box } from './Box';

export const App = () => {
  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
};
