import { SET_BUSDATA } from "../../constants/actionTypes";

const setBusData = (busData) => {
    return {
      type: SET_BUSDATA,
      payload: busData,
    }
  }
  
  export { setBusData }