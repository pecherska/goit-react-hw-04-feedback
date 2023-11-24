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
