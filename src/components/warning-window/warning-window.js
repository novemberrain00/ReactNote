import React, {Component} from 'react';

import './warning-window.css'

export default class WarningWindow extends Component {
    render() {

        const{ showWarningWindow } = this.props;
        if(showWarningWindow) {
            return(
                <div className={warningClassList}>
                    Все поля должны быть заполнены
                </div>
            )
        } else {
            return null;
        }
    }
}