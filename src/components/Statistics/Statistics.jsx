import PropTypes from 'prop-types';
import { StatisticName, StaticticCotainer } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StaticticCotainer>
      <StatisticName>
        Good:
        <span>{good}</span>
      </StatisticName>
      <StatisticName>
        Neutral:
        <span>{neutral}</span>
      </StatisticName>
      <StatisticName>
        Bad:
        <span>{bad}</span>
      </StatisticName>
      <StatisticName>
        Total:
        <span>{total}</span>
      </StatisticName>
      <StatisticName>
        Positive Feedback:
        <span>{positivePercentage}%</span>
      </StatisticName>
    </StaticticCotainer>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
