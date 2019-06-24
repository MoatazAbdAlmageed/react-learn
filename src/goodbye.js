// src/goodbye.js
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Goodbye extends Component {
    constructor(props) {
        super(props); // required call
        this.state = {clicks: 0}; // state should be initialized here
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    handleClick() {
        // Do not mutate state directly. Use setState()  react/no-direct-mutation-state
        // this.setState({clicks: ++this.state.clicks}); // state should be updated like this
        this.setState((state, props) => {
            return {clicks: ++state.clicks};
        });
    }

    render() {
        // this.props.name = 'Islam'; //TypeError: Cannot assign to read only property 'name' of object '#<Object>'
        const {name, age} = this.props;
        const {clicks} = this.state;

        // this.props.age = 80; //TypeError: Cannot assign to read only property 'age' of object '#<Object>'

        return <div>
            <button onClick={() => this.handleClick()} className="button-success pure-button">Say Goodbye</button>
            <h1>Goodbye,{clicks} time(s)!</h1>
            <h2>You Name is {name}</h2>
            <h3>You have {age} years old</h3>
        </div>;
    }
}
Goodbye.defaultProps = {name: 'Foo', age: 18};
Goodbye.propTypes = {name: PropTypes.string.isRequired};




