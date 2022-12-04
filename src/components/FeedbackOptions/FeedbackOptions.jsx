import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

function FeedbackOptions({ FeedbackHandleClickButtonGood, FeedbackHandleClickButtonNeutral, FeedbackHandleClickButtonBad }) {
    return (
        <ul className={css.list}>
        <li>
        <button type='button' onClick={FeedbackHandleClickButtonGood} className={css.button}>Good</button>
        </li>
        <li>
        <button type='button' onClick={FeedbackHandleClickButtonNeutral} className={css.button}>Neutral</button>
        </li>
        <li>
        <button type='button' onClick={FeedbackHandleClickButtonBad} className={css.button}>Bad</button>
        </li>
      </ul>
    );
  }
  
  FeedbackOptions.prototype = {
    FeedbackHandleClickButtonGood: PropTypes.func.isRequired,
    FeedbackHandleClickButtonNeutral: PropTypes.func.isRequired,
    FeedbackHandleClickButtonBad: PropTypes.func.isRequired,
  };
  
  export default FeedbackOptions;