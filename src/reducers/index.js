import { combineReducers } from 'redux';

import TotalSum from './reducer_sum';

const rootReducer = combineReducers({
  sum: TotalSum
});

export default rootReducer;
