import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce(
      (acc, data) => acc + data,
      0
    );

    return total;
  };
  countPositiveFeedbackPercentage = () => {
    // if (this.countTotalFeedback() === 0) {
    //   {
    //     return 0;
    //   }
    // }
    const positivePercentage = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );

    return positivePercentage;
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  render() {
    const states = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(states)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={states.good}
              neutral={states.neutral}
              bad={states.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
