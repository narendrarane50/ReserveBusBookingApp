// import busDataReducer from "./busData";
// import { combineReducers } from 'redux';

// const rootReducer = combineReducers({
//     busData: busDataReducer,
//   });
  
//   export default rootReducer;

import { combineReducers } from "redux";
import busDataReducer from "./busData";
// import buslocationReducer from "./busLocationReducer";

//main reducer of the App
const rootReducer = combineReducers ({
    busData: busDataReducer
})


export default rootReducer