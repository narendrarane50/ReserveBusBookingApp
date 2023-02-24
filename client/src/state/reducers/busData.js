import { SET_BUSDATA } from "../../constants/actionTypes";



const INIT_STATE = [];

const busDataReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_BUSDATA:
      return [{...action.payload}];

    default:
      return state;
  }
};

export default busDataReducer;