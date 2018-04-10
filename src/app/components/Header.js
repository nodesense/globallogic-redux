import React, {Component} from 'react';

import {NavLink} from "react-router-dom";

//React.Component == Component

export default class Header extends Component {
    constructor(props) {
        super(props);
        console.log("Header props ", props);
    }

    render() {
        //props is a keyword
        //let title = this.props.appTitle;
        // deconstruct
        let {appTitle} = this.props;

        return (
            <div>
                {/* <h2>{appTitle}</h2> */}

                {this.props.children}

                <NavLink to="/" exact className="button" activeClassName="success"  >
                    Home
                </NavLink>

                <NavLink to="/products" className="button"  activeClassName="success" >
                    Products
                </NavLink>
                  
                <NavLink to="/redux-cart" className="button"  activeClassName="success" >
                   Redux Cart
                </NavLink>


                <NavLink to="/counter" className="button"  activeClassName="success" >
                    Counter
                </NavLink>
 

                <hr />
            </div>
        )
    }
}