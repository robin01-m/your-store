import React, { Component } from 'react'

export default class Counter extends Component {
    state={
        count:0 
    }
    constructor(){
        super();
        console.log('Component has been called')
    }
    increment = ()=>{
        this.setState({count: this.state.count +1} );
    }
    decrement = ()=>{
        this.setState({count: this.state.count -1});
    }
    componentWillMount(){
        console.log('component is about to update');
    }
    componentDidUpdate(){
        console.log('component is about to update');
    }
    componentDidUpdate(){
        console.log('component is now update');
    }
    componentDidMount(){
        console.log('component mounted');
        }
        render() {
        return (
            <div>
                <h1 className={this.state.count >=0? 'green':'red'}>{this.state.count}</h1>
                <button  onClick={this.increment}
                className="btn btn-success">Increment</button>{" "}
                <button onClick={this.decrement} className="btn btn-primary">Decrement</button>
            </div>
        )
    }
}
