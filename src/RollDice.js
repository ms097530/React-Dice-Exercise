import React, { Component } from 'react';
import './RollDice.css';
import Die from './Die';

class RollDice extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            dieSize: '10rem',
            face1: 'three',
            face2: 'four',
            isRolling: false
        }
        this.roll = this.roll.bind(this);
        this.numToString = this.numToString.bind(this);
    }

    roll(e)
    {
        let firstNum = Math.floor(Math.random() * 6 + 1);
        let secondNum = Math.floor(Math.random() * 6 + 1);
        e.target.setAttribute('disabled', '');
        this.setState(
            {
                face1: this.numToString(firstNum),
                face2: this.numToString(secondNum),
                isRolling: true
            })
        // could use this to disable/enable button
        // () =>
        // {
        //     setTimeout(() => 
        //     {
        //     e.target.removeAttribute('disabled');
        //     }, 2000);
        // });

        setTimeout(() =>
        {
            this.setState({ isRolling: false });
        }, 1000);
    }

    numToString(num)
    {
        switch (num)
        {
            case 1: return 'one';
            case 2: return 'two';
            case 3: return 'three';
            case 4: return 'four';
            case 5: return 'five';
            case 6: return 'six';
        }
    }

    render()
    {
        return (
            <div>
                <div className="RollDice-dice">
                    <Die
                        size={this.state.dieSize}
                        face={this.state.face1}
                        isRolling={this.state.isRolling} />
                    <Die
                        size={this.state.dieSize}
                        face={this.state.face2}
                        isRolling={this.state.isRolling} />
                </div>
                <button className="RollDice-btn" onClick={this.roll} disabled={this.state.isRolling}>
                    {
                        this.state.isRolling ?
                            'Rolling...'
                            : 'Roll dice!'
                    }
                </button>
            </div>
        );
    }
}

export default RollDice;
