import { useEffect, useState } from "react";

import { Section } from './Section/Section';
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })
  const [total, setTotal] = useState(0);
  const [positiveFeedback, setPositiveFeedback] = useState(0);


  const handleFidback = ({target}) => {
    setState(prevState => { return {...prevState, [target.id]: prevState[target.id] + 1,} })  
  }
  
  useEffect(()=> {setTotal((Object.values(state)).reduce((acc, item) => {return acc + item}, 0))},[state.good, state.bad, state.neutral])

  useEffect(()=> {setPositiveFeedback((Math.round(state.good / total * 100) ) || 0)},[state.good, total])
    
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={state} onLeaveFeedback={handleFidback}></FeedbackOptions>
        </Section>
          

        <Section title="Statistics">

          {(total !== 0) ?
          (<Statistics good={state.good} neutral={state.neutral} bad={state.bad} total={total} positivePercentage={positiveFeedback} />) :
          (<Notification message="There is no feedback"></Notification>)}
          
        </Section>       
      </>
    );
  };



