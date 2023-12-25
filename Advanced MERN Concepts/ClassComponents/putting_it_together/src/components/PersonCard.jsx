import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName : this.props.firstName,
            lastName : this.props.lastName,
            age : this.props.age,
            hairColor : this.props.hairColor
        }
    }
    handleAge = (e) => {
        e.preventDefault()

        const newAge = this.state.age += 1
        this.setState({age: newAge})
        console.log(this.state.age)
    }
    render() {
        return (
            <div>
            <h1>{this.state.lastName}, {this.state.firstName}</h1>
            <p>Age: {this.state.age}</p>
            <p>Hair Color: {this.state.hairColor}</p>
            <button onClick={this.handleAge}>Birthday Button for {this.state.firstName} {this.state.lastName}</button>
        </div>
        );
    }
}

export default PersonCard;
