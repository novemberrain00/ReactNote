import React, {Component} from 'react';

import './notes-block.css';

import Note from '../note'

export default class NotesBlock extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render(){

        const { editNote, removeNote, notes } = this.props;

        const posts = notes.map(item => {
            return(
                <Note 
                    title={item.title}
                    text={item.text}
                    date={item.date}
                    time={item.time}
                    id={item.id}
                    editNote={editNote}
                    removeNote={removeNote}
                />
                
            )
        });

        if(notes.length === 0) {
            return (
                <div>
                    <h2 className="empty">Давайте создадим вашу первую заметку!</h2>
                </div>
            )
        }

        return (
            <div>
                {posts}
            </div>
        )

        

    };
} 