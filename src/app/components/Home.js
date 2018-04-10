// state
import React from "react";

// not for production, tight coupling react and redux
// understand redux core apis

import store from "../store";
import * as actions from "../state/actions";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    // subscribe
    componentDidMount() {
        // returns  a unique unsubscribe function
        // API 4
        this.unsubscribeFn = store.subscribe( () => {
            console.log("HOME SUBSCRIBE ", Math.random());
            this.forceUpdate(); // trigger render
        });
    }

    //unsubscribe
    componentWillUnmount() {
        // API 5
        // remove subscription for unmounted component
        this.unsubscribeFn();
    }

    increment() {
         let action = actions.increment(1); // returns {type: 'INC', value: 1}
         
         // calls reducer 
         // API 3
         store.dispatch(action);
         //sync code
         console.log("STATE ", store.getState());
    }

    decrement = () => {
         
    }

    render() {
        
        // API 2
        let state = store.getState();
        // state.counter from combineReducers
        let counter = state.counter;
        console.log("Home render", counter);

     
        return (
            <div>
                
                <h2>Home</h2>
                <p> Counter: {counter} </p>

                <button onClick={ () => this.increment() }>
                  +1
                </button>

                <button onClick={this.decrement }>
                -1
                </button>
            
            </div>
        )
    }
}