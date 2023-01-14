import { P } from './Statistics_css';

import PropTypes from 'prop-types';

export const Statistics = ({ ...arr }) => {
      return (
           (Object.entries(arr)).map((item) => (<P key={item[0]}>{item[0]}: <b>{item[1]} {item[0] === 'positivePercentage' && '%'}</b></P>))
      )
};
    
Statistics.propTypes = {
     arr: PropTypes.arrayOf(PropTypes.shape({
          good: PropTypes.number.isRequired,
          neutral: PropTypes.number.isRequired,
          bad: PropTypes.number.isRequired,
          total: PropTypes.number.isRequired,
          positivePercentage: PropTypes.number.isRequired,
     })),
}