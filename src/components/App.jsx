import { Component } from "react";

import { Section } from './Section/Section';
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleFidback = ({target}) => {
    this.setState(prevState => { return {[target.id]: prevState[target.id] + 1,} })  
  }
  
  countTotalFeedback = () => {
      return (Object.values(this.state)).reduce((acc, item) => {return acc + item}, 0)
    }
  countPositiveFeedbackPercentage = () => {
    return (Math.round(this.state.good / this.countTotalFeedback() * 100) ) || 0;
  }

  render() {
    
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.state} onLeaveFeedback={this.handleFidback}></FeedbackOptions>
        </Section>
          

        <Section title="Statistics">

          {(this.countTotalFeedback() !== 0) ?
          (<Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />) :
          (<Notification message="There is no feedback"></Notification>)}
          
        </Section>       
      </>
    );
  };
};


