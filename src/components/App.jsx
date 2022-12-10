import { Component } from 'react';
import Section from 'components/Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from 'components/Notification/Notification';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClickButtonGood = evt => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  handleClickButtonNeutral = evt => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleClickButtonBad = evt => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedback = () => {
    const totalFeedback = this.countTotalFeedback();
    const goodFeedback = this.state.good;
    let result = 0;
    if (totalFeedback !== 0) {
      result = Math.ceil((goodFeedback / totalFeedback) * 100);
    }
    return `${result}`;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = this.countTotalFeedback();
    const countPositiveFeedbackPercentage = this.countPositiveFeedback();
    const onHandleClickButtonGood = this.handleClickButtonGood;
    const onHandleClickButtonNeutral = this.handleClickButtonNeutral;
    const onHandleClickButtonBad = this.handleClickButtonBad;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            FeedbackHandleClickButtonGood={onHandleClickButtonGood}
            FeedbackHandleClickButtonNeutral={onHandleClickButtonNeutral}
            FeedbackHandleClickButtonBad={onHandleClickButtonBad}
          />
          <div title="Statistics">
            {countTotalFeedback > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback}
                positivePercentage={countPositiveFeedbackPercentage}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </div>
        </Section>
      </div>
    );
  }
}

export default App;
