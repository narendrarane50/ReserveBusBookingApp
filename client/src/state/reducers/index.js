import busDataReducer from "./busData";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    busData: busDataReducer,
  });
  
  export default rootReducer;