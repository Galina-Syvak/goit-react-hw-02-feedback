import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export default function FeedbackOptions ({ options, onLeaveFeedback }) {
    return (
        <ul className={css.feedbackList}>
            {options.map(feedback =>
                <li className={css.feedbackItem} key={feedback}>
                    <button className={css.feedbackButton} type="button" data-name={feedback} onClick={onLeaveFeedback}>{feedback}</button>
                </li>
            )}
        </ul>
    );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};