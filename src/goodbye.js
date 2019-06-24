// src/goodbye.js
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Goodbye extends Component {
    constructor(props) {
        super(props); // required call
        this.state = {clicks: 0}; // state should be initialized here
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
        const {name} = this.props;
        const {clicks} = this.state;
        return <h1 onClick={() => this.handleClick()}>Goodbye, {name} {clicks} time(s)!</h1>;
    }
}
Goodbye.defaultProps = {name: 'Foo'};
Goodbye.propTypes = {name: PropTypes.string.isRequired};




