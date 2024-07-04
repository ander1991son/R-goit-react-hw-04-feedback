import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad }) => {
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  const total = countTotalFeedback();

  const percentage = countPositiveFeedbackPercentage();

  return (
    <div>
      <div>
        <form>
          <label>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
          </label>
        </form>
      </div>
      <div>
        <p>Total: {total}</p>
        <p>Positive feedback: {percentage}%</p>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default Statistics;
