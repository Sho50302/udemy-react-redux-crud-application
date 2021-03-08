import _ from 'lodash';
import { READ_EVENTS } from '../actions';

/* export defaultの時点で変数宣言しているため、
export defaultの後に関数を宣言するとWarningが出る。
そのため一時的に関数を変数に格納し、exportする */
const switchEvents = (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id');
    default:
      return events;
  }
};

export default switchEvents;
