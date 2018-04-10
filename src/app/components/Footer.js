import React from "react";

import PropTypes from "prop-types";

import styles from './Footer.css';

// returns virtual dom
// functional component
// presentational component
// stateless component
export default function Footer(props) {
    console.log("Footer render called");
    
    //Error, read only, immutable
    //props.year = 2020;

    return (
        
        <div className={styles.footer}>
             
            <hr />
            <p>Copyrights @{props.appTitle}, {props.year}</p>

            {/* content inside footer is called children */}

            {props.children}
            

        </div>
         
    )
}


// propTypes is a keyword
Footer.propTypes = {
    appTitle : PropTypes.string,
    //isRequired mandatory props
    year: PropTypes.number.isRequired
}

//defaultProps is a keyword
// when props not passed, default value taken
Footer.defaultProps = {
    appTitle: 'Product App'
}