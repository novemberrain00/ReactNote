import React, {Component} from 'react';

import './button.css';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        
        const { text, calb } = this.props;

        return(
            <button onClick={calb} className="btn">{text}</button>
        )
    }
}