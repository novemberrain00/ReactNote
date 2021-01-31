import React, { Component } from 'react';

import Button from '../button';

import './note-editor.css'

export default class NoteEditor extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {

        const { editorTitle, show, action, setText, setTitle, editableText, editableTitle } = this.props;

        if(show) {
            return(
                <div className="note-editor-wrapper">
                    <div className="note-editor animate__slideInDown">
                        <h3 className="editor-title">{editorTitle}</h3> 
                        <Button calb={action} text="Сохранить"/>
                        <div className="editor-content">
                            <div className="editor-toolbar"></div>
                            <input value={editableTitle} onInput={setTitle} placeholder="Название" type="text" className="editor-input"/>
                            <textarea value={editableText} onInput={setText} placeholder="Что бы вы хотели запомнить..." className="editor-text"></textarea>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}