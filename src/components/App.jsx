import { useReducer } from "react";

import { Section } from './Section/Section';
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positiveFeedback: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'good':
      return {...state, good: state.good + 1, total: state.total + 1, positiveFeedback: ((Math.round((state.good + 1) / (state.total + 1) * 100) ) || 0)};
    case 'neutral':
      return {...state,  neutral: state.neutral + 1, total: state.total + 1, positiveFeedback: ((Math.round((state.good) / (state.total + 1) * 100) ) || 0) };
    case 'bad':
      return { ...state, bad: state.bad + 1,  total: state.total + 1, positiveFeedback: ((Math.round((state.good) / (state.total + 1) * 100) ) || 0)};
    default:
      throw new Error();
  }
}

export function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [total, setTotal] = useState(0);
  // const [positiveFeedback, setPositiveFeedback] = useState(0);


  const handleFidback = ({ target }) => {
    dispatch({type: target.id})}
  
  // useEffect(()=> {setTotal((Object.values(state)).reduce((acc, item) => {return acc + item}, 0))},[state.good, state.bad, state.neutral])

  // useEffect(()=> {setPositiveFeedback((Math.round(state.good / total * 100) ) || 0)},[state.good, total])
    
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={state} onLeaveFeedback={handleFidback}></FeedbackOptions>
        </Section>
          

        <Section title="Statistics">

          {(state.total !== 0) ?
          (<Statistics good={state.good} neutral={state.neutral} bad={state.bad} total={state.total} positivePercentage={state.positiveFeedback} />) :
          (<Notification message="There is no feedback"></Notification>)}
          
        </Section>       
      </>
    );
  };



