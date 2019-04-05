import React from 'react';
import './counter.css';



export class SecondsCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            one: 0,
            two: 0,
            three: 0,
            four: 0,
            five: 0,
            six: 0
        }
    }

    secondss = () => {
        this.setState(function(prevState) {
            if (prevState.one === 9) {
                return {
                    one: 0,
                    two: prevState.two + 1,
                }
            }
            if (prevState.two === 9) {
                return {
                    two: 0,
                    three: prevState.three + 1
                }
            }
            if (prevState.three === 9) {
                return {
                    three: 0,
                    four: prevState.four + 1
                }
            }
            if (prevState.for === 9) {
                return {
                    four: 0,
                    five: prevState.five + 1
                }
            }
            if (prevState.six === 9) {
                return {
                    five: 0,
                    six: prevState.six + 1
                }
            }

            else {
                return {
                    one: prevState.one + 1,
                }
            }
        })
    }

    componentDidMount() {
        this.intervalSecond = setInterval(() => this.secondss(), this.props.number);

    }


    render() {
        return (

            <div className="counter">
                <div className="containerCenter">
                    <div className="number count img"></div>
                    <div className="number">{this.state.six}</div>
                    <div className="number">{this.state.five}</div>
                    <div className="number">{this.state.four}</div>
                    <div className="number">{this.state.three}</div>
                    <div className="number">{this.state.two}</div>
                    <div className="number">{this.state.one}</div>
                </div>
            </div>

        )

    }
}
