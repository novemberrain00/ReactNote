import React, {Component} from 'react';

import Button from '../button'

import './header.css'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {

        const { showEditor } = this.props;

        return(
            <div className="header">
                <h1 className="title">ReactNote</h1>
                <div className="toolbar">
                   <Button text="+" calb={showEditor}/>
                </div>
            </div>
        )
    }
}