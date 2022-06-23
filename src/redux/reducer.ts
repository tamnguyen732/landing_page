import { combineReducers } from 'redux';

import employerReducer from './slices/employerSlice';
import employeeReducer from './slices/employeeSlice';
import modalReducer from './slices/modalSlice';

const rootReducer = combineReducers({
  employer: employerReducer,
  employee: employeeReducer,
  modal: modalReducer,
});

export default rootReducer;
