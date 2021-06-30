/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    // lifecycle method
    componentDidMount() {
        this.timeID = setInterval(() => {
            this.tick();
        }, 1000);
    }

    // lifecycle method
    componentWillUnmount() {
        clearInterval(this.timeID);
    }

    // custom methods
    tick() {
        this.setState({
            date: new Date(),
        });
    }

    // dedicated render method

    render() {
        return (
            <h1>
                <span className="text">
                    {this.state.date.toLocaleTimeString(this.props.locale)}
                </span>
            </h1>
        );
    }
}

export default Clock;
