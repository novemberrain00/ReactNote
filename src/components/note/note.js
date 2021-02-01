import React, {Component} from 'react';

import './note.css';

export default class Note extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const { title, text, date, time, id, editNote, removeNote } = this.props;

        return (
            <div className="note" data-id={id}> 
                <div className="note-header">
                    <span className="date">{date} | {time}</span>
                    <span onClick={editNote} className="note-edit">Редактировать |</span>  
                    <span onClick={()=>{removeNote(id)}} className="note-delete">Удалить</span>   
                </div>
                <h2 className="note-title">{title}</h2>
                <p className="note-descr">
                    {text}
                </p>
            </div>
        )
    }
}