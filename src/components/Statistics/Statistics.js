import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import {
  Title,
  StatisticsInfoList,
  StatisticsInfo,
} from '../Statistics/Statistics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export function Statistics({ title, stats }) {
  return (
    <Box
      as="section"
      display="flex"
      flexDirection="column"
      maxWidth="375px"
      m="20px"
      boxShadow="box"
      bg="accent"
      minHeight="200px"
    >
      <Title>{title}</Title>
      <Box as="ul" display="flex" justifyContent="space-around" m="0" p="0">
        {stats.map(stat => (
          <StatisticsInfoList
            backgroundColor={getRandomHexColor()}
            key={stat.id}
          >
            <StatisticsInfo>{stat.label}</StatisticsInfo>
            <StatisticsInfo>{stat.percentage}%</StatisticsInfo>
          </StatisticsInfoList>
        ))}
      </Box>
    </Box>
  );
}
Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
