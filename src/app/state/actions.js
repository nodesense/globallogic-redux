// Action creators helper method to create actions

import * as ActionTypes from "./ActionTypes";

export function increment (value) {
    console.log("action increment called ", value);
    
    return {
        type: ActionTypes.INCREMENT,
        payload: {
            value: value
        }
    }
}

export const decrement = (value) => {
    return {
        type: ActionTypes.DECREMENT,
        payload: {
            value
        }
    }
}   

// {type: 'COUNTER.INCREMENT', pyload: {value: 10}}


// export const decrement2 = (value) => {
//         type: ActionTypes.DECREMENT,
//         payload: {
//             value
//         }
// }   