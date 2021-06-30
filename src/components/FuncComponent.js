/* eslint-disable react/destructuring-assignment */
import React from 'react';

class ClockFunc extends React.Component {
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
                <span className="text">{this.state.date.toLocaleTimeString()}</span>
            </h1>
        );
    }
}

export default ClockFunc;
