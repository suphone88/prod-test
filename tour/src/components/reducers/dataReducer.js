import {
  FETCH_DIVISION,
  FETCH_SINGLEDIVISION,
  FETCH_FAMOUSPLACE,
} from "../actions/types";

const initialState = {
  divisions: [],
  singleDivision: {},
  famousPlace: {},
};

export const dataReducer = (state = initialState, action) => {
  //console.log("Reducer Division >>", action.payload);
  switch (action.type) {
    case FETCH_DIVISION:
      return { ...state, divisions: [...action.payload] };
    case FETCH_SINGLEDIVISION:
      //console.log("Reducer SingleDivision >>", action.payload);
      return { ...state, singleDivision: { ...action.payload } };
    case FETCH_FAMOUSPLACE:
      console.log("Reducer famousPlace >>", action.payload);
      return { ...state, famousPlace: { ...action.payload } };
    default:
      return state;
  }
};

export default dataReducer;
