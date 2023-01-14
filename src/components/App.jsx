import { useState, useEffect } from "react";

import { Section } from './Section/Section';
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export function App  () {

  const [feedback, setFeedback] = useState({good: 0, neutral: 0, bad: 0});
  const [positiveFeedbackPercentage, setPositiveFeedbackPercentage] = useState(0);
  const [total, setTotal] = useState(0);
  

  useEffect(() => {
    setTotal(Object.values(feedback).reduce((acc, curr) => acc + curr, 0))
  }, [feedback.good, feedback.neutral, feedback.bad, total]);
  
  function handleFidback({ target }) {
   switch (target.id) {
    case "good":
      setFeedback({ ...feedback, good: feedback.good + 1, })
      break;
       case "bad":
      setFeedback({ ...feedback, bad: feedback.bad + 1, })
       break;
     case "neutral":
      setFeedback({ ...feedback, neutral: feedback.neutral + 1, })
      break;
     default:
       setFeedback({ ...feedback})
      break;
   }
  };
  
  useEffect(() => { setPositiveFeedbackPercentage (Math.round(feedback.good / total * 100) || 0)}, [feedback.good, total, positiveFeedbackPercentage]);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={feedback} onLeaveFeedback={handleFidback}></FeedbackOptions>
        </Section>
          

        <Section title="Statistics">

          {(total !== 0) ?
          (<Statistics good={feedback.good} neutral={feedback.neutral} bad={feedback.bad} total={total} positivePercentage={positiveFeedbackPercentage} />) :
          (<Notification message="There is no feedback"></Notification>)}
          
        </Section>       
      </>
    );

};