import { P } from "components/Statistics/Statistics_css";

import PropTypes from 'prop-types';

export const Notification = ({message}) => {
    return (<P>{message}</P>);
}

Notification.propTypes = {
  message: PropTypes.node.isRequired,
}