"use strict";

counter = 100;

function increment() {
    console.log("counter ", this.counter);
}
  
let onClick = increment;

onClick.apply();