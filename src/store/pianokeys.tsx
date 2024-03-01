import { Reducer } from "@reduxjs/toolkit";


const initialState = {
    keypress:[],
};




const pianokeys: Reducer<any> = (
  state = initialState,
  action = { type: '@INIT' , payload: undefined}
) => {
  switch (action.type) {
    case 'PRESSKEY':
      return {
        ...state,
        keypress: [...state.keypress,action.payload],

      };

      case 'RELEASEKEY':
        return {
          ...state,
          keypress: [...state.keypress.filter(e => e!=action.payload)],
  
        };

    default:
      return state;
  }

};

export default pianokeys;
