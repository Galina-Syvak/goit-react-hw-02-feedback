import PropTypes from 'prop-types';
import Notification from '../Notification/Notification'

export default function Statistics ({good, neutral, bad, total, positivePercentage}) {
  return (total ?
    <div>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: ${positivePercentage}%</li>
      </ul>
    </div> : <Notification message="No feedback given"/>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};