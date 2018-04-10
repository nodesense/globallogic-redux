// bootstrap react app into real dom

// diff, patching
import {render} from 'react-dom';
import React from 'react';


import store from "./app/store";

import {Provider} from "react-redux";

import Routes from "./app/Routes";

// render (virtual dom, real dom)
// store is exposed as context variable by provider
render( 
        <Routes />
       
        ,
    document.getElementById('root'));
