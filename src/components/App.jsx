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

  handleClickButton = evt => {
  const option = evt.target.name;
  if (option) {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  }
}

  // handleClickButtonGood = evt => {
  //   this.setState(prevState => ({
  //     good: prevState.good + 1,
  //   }));
  // };
  // handleClickButtonNeutral = evt => {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // };
  // handleClickButtonBad = evt => {
  //   this.setState(prevState => ({
  //     bad: prevState.bad + 1,
  //   }));
  // };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedback = () => {
    const totalFeedback = this.countTotalFeedback();
    const goodFeedback = this.state.good;
    return  Math.ceil((goodFeedback / totalFeedback) * 100) || 0;
    
  };
  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = this.countTotalFeedback();
    const countPositiveFeedbackPercentage = this.countPositiveFeedback();
    const options = Object.keys(this.state);
    const handleClickButton = this.handleClickButton;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={handleClickButton}
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
