import { useState } from "react";

import { Section } from './Section/Section';
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { useEffect } from "react";

export function App() {

  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [total, setTotal] = useState(0);
  const [positiveFeedback, setPositiveFeedback] = useState(0);

  const handleFidback = ({ target }) => {
    switch (target.id) {
      case 'good':
        setGood(good + 1);
        return;
      case 'neutral':
        setNeutral(neutral + 1);
        return;
      case 'bad':
        setBad(bad + 1);
      return;
    default:
      throw new Error();
  }
  };

  useEffect(() => {
    setTotal(good + bad + neutral);
    setPositiveFeedback(((Math.round((good) / (good + bad + neutral) * 100)) || 0))
  }, [good, bad, neutral]);
    
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={{good, bad, neutral}} onLeaveFeedback={handleFidback}></FeedbackOptions>
        </Section>
          

        <Section title="Statistics">

          {(total !== 0) ?
          (<Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positiveFeedback} />) :
          (<Notification message="There is no feedback"></Notification>)}
          
        </Section>       
      </>
    );
  };



