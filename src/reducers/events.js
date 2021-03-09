import _ from 'lodash';
import {
  READ_EVENTS,
  READ_EVENT,
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
} from '../actions';

/* export defaultの時点で変数宣言しているため、
export defaultの後に関数を宣言するとWarningが出る。
そのため一時的に関数を変数に格納し、exportする */
const switchEvents = (events = {}, action) => {
  switch (action.type) {
    case READ_EVENT:
    case CREATE_EVENT:
    case UPDATE_EVENT:
      const data = action.response.data;
      return { ...events, [data.id]: data }
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id');
    case DELETE_EVENT:
      delete events[action.id];
      return { ...events };
    default:
      return events;
  }
};

export default switchEvents;
