// state
import React from "react";

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        // state is keyword for react
        // mutable
        this.state = {
            counter: 0
        }
    }

    increment() {
        //BAD, mutating state directly
        this.state.counter++;
        console.log("Counter ", this.state.counter);
    
        // considerably BAD
        //keyword, shall let react call render
        this.forceUpdate();
    }

    decrement = () => {
        //console.trace();
        //keyword setState
        //GOOD
        // async
        // calls render
        console.log("before ", this.state.counter);
        this.setState( {
            counter : this.state.counter - 1
        })

        this.setState({
            flag: true
        })
        console.log("after ", this.state.counter);
    }

    render() {
        console.log("Home render", this.state.counter);

 
        

         
     
        return (
            <div>
                
                <h2>Home</h2>
                <p> Counter: {this.state.counter} </p>

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