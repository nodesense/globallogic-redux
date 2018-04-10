
import {createStore, combineReducers
                    , applyMiddleware} from "redux";

import counterReducer from "./state/reducer";
import cartReducer from "./redux-cart/state/cartReducer";
import productReducer from "./product/state/productReducer";

import loggerMiddleware from "./loggerMiddleware";

import thunk from "redux-thunk";

function storageMiddleware(store) {
    return function (next) {
        return function(action) {
            let result = next(action); // call reducers, middleware

            if (typeof action.type == 'string' && 
                action.type.indexOf("CART.") >= 0) {
                    let items = store.getState().items;

                    localStorage.setItem("carts", JSON.stringify(items));
                }
        }
    }
}

let cartsStr = localStorage.getItem("carts");
let items = cartsStr && JSON.parse(cartsStr) 
items = items || [];

 
// API 1, single reducer, store.getState() ==> 100
// let store = createStore(counterReducer, 100);

let rootReducer = combineReducers({
    //stateName: reducerFn
    counter: counterReducer, 
    items: cartReducer,
    product: productReducer
    //auth: authReducer
})

//store.getState() ==> { counter: 100, items: [{id: 1...}]}
let store = createStore(rootReducer, 
                        { counter: 100, items: items }, 
                        applyMiddleware(loggerMiddleware, storageMiddleware, thunk)
)

export default store;