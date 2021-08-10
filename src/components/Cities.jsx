import React, { Component } from 'react'

export default class Cities extends Component {
    state = {
        cities:["chandigarh","mohali"],
    };

    updateCities = (e) =>{
        if(e.code  === "Enter") {
            this.setState({cities: [...this.state.cities,e.target.value]});
            e.target.value = "";
        }
    };
    deleteCity = (city) =>{
        let newCities = [...this.state.cities];
        newCities = newCities.filter((c) => c !== city);
        this.setState({cities: newCities});

    }
    render() {
        return (
            <div>
                {this.state.cities.map((city) =>(
                    <h1 key={city}>
                    {city} <button onClick={() => this.deleteCity(city)}>Delete</button></h1>
                ))}
                <input onKeyUp={this.updateCities} type="text"/>
                
            </div>
        );
    }
}
