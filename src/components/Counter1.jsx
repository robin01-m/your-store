import React, { Component } from 'react'

export default class Counter1 extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>name------{this.props.name}</h1>
                <h1>location-----{this.props.location}</h1>
                
            </div>
        )
    }
}
