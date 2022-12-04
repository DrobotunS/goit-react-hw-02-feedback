import PropTypes from 'prop-types';
import css from './Statistics.module.css' 

function Statistics ({ good, neutral, bad, total, positivePercentage }) {
    
        return (
            <div>
            
      <h3 className={css.title}>Statistics</h3>
      <ul>
        <li className={css.statisticsList}>
            <p>Good: <span>{good}</span></p>
        </li>
        <li className={css.statisticsList}>
        <p>Neutral: <span>{neutral}</span></p>
        </li>
        <li className={css.statisticsList}>
        <p>Bad: <span>{bad}</span></p>
        </li>
        <li className={css.statisticsList}>
        <p>Total: <span>{total}</span></p>
        </li>
        <li className={css.statisticsList}>
        <p>Positive feedback: <span>{positivePercentage}%</span></p>
        </li>
      </ul>
      </div>
        );
    }


    Statistics.prototype = {
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired,
      positivePercentage: PropTypes.string.isRequired,
    };
    
  export default Statistics;