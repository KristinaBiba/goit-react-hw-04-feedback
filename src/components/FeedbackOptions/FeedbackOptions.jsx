import { Button } from './FeedbackOptions_css';

import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
        return (
          Object.keys(options).map(item => (<Button type="button" key={item} id={item} onClick={onLeaveFeedback}>{item}</Button>)) )
    };

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func,
}