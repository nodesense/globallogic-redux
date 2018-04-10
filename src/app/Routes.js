
import React from "react";

import Home from "./components/Home";
 
import NotFound from "./components/NotFound";

 
import ReduxCart from "./redux-cart/containers/Cart";
import ProductList from "./product/containers/ProductList";

// dump component
// import Counter from "./components/Counter";
//Container, smart component
import Counter from "./containers/CounterContainer";

import {BrowserRouter as Router, 
        Route, 
        Switch, 
        Redirect } from 'react-router-dom';

import {App} from "./App";

//functional component
export default function Routes(props) {
    return (
        <Router>
            <App>

                <Switch>
                    <Route path="/" exact  component={Home} />
                    <Route path="/products" component={ProductList} />
                    <Route path="/counter" component={Counter} />
                    <Route path="/redux-cart" component={ReduxCart} />
                    <Route path="*" component={NotFound} />
                </Switch>
                
            </App>
        </Router>
    )
}