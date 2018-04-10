import * as ActionTypes from "./ActionTypes";

const INITIAL_STATE = 0;
export default function counterReducer(state = INITIAL_STATE, action) {
    console.log("CounterReducer ", state, action);

    switch(action.type) {
        case ActionTypes.INCREMENT: 
                return state + action.payload.value;

        case ActionTypes.DECREMENT: 
                return state - action.payload.value;

        
        default:
            return state;
    }
}