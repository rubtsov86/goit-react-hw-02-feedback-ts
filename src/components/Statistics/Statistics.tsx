interface IStatistics {
  good: number;
  neutral: number;
  bad: number;
}

export const Statistics: React.FC<IStatistics> = ({
  good = 0,
  neutral = 0,
  bad = 0,
}) => {
  return (
    <>
      <h2>Statistics</h2>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
      </ul>
    </>
  );
};
