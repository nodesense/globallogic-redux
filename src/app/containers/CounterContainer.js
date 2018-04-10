// parent component, bridge between react and redux

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
// Presentational component
import Counter from "../components/Counter";

import * as actions from "../state/actions";


// return obj of props with value, taken from state
// state ==> store.getState()
// who calls? container component shall call this
// when? subscribe, container shall subscribe/unsubsribe
function mapStateToProps(state) {
    return {
        // propName: state value
        counter: state.counter
    }
}

// TODO: dispatch (store.dispatch)
//returns props with functions
function mapDispatchToProps(dispatch) {
    return {
        // called by component thru props

        // increment: function(value) {
        //     let action = actions.increment(value);
        //     dispatch(action);
        // }

        // bind action create above code
        // returns a function, that bind actions and dispatch
        increment: bindActionCreators(actions.increment, dispatch)
    }
}


// decorator pattern
let connectFn = connect(mapStateToProps, mapDispatchToProps);


// store.getState, subsc, unsubs
// container get store through providers
let CounterContainerComponent = connectFn(Counter);

export default CounterContainerComponent;
