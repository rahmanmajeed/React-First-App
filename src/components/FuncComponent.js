/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Button from './Button';

class ClockFunc extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date(), locale: 'bn-BD' };
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
            <div>
                <h1>
                    <span className="text">{this.state.date.toLocaleTimeString()}</span>
                </h1>
                <Button locale={this.state.locale} />
            </div>
        );
    }
}

export default ClockFunc;
