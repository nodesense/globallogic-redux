
export default function loggerMiddleware(store) {
    console.log("Outter logger function");

    //next is a function
    return function (next) {
        console.log("inner next function ");

        // called for every dispatch
        return function (action) {
            console.log("LOGGER ", action, typeof action);

            // this is done by thunk
            // if (typeof action == 'function') {
            //     return action(store.dispatch, store.getState);
            // }

            let result;

            // next: forward action to next middleware or
            // reducers
           result = next(action);

            return result;
        }
    }
}