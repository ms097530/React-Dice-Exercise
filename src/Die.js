import React, { Component } from 'react';
import './Die.css';

class Die extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return (
            <div className="Die">
                <i className={`fas fa-dice-${this.props.face} ${this.props.isRolling && 'rolling'}`} style={{ fontSize: this.props.size }}></i>
            </div>
        );
    }
}

export default Die;
