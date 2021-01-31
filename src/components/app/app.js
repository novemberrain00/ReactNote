import React, {Component} from 'react';

import Header from '../header';
import NotesBlock from '../notes-block';
import NoteEditor from '../note-editor';

import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.props = props;

        this.id = 0;        

        this.state = {
            data: [],
            editorShowed: false,
            editorTitle: "Добавить заметку",
            lastTitle: "",
            lastText: "",
            editableTitle: "",
            editableText: "",
            editable: 0
        }

        this.showEditor = this.showEditor.bind(this);
        this.closeEditor = this.closeEditor.bind(this);
        this.setTitle = this.setTitle.bind(this);
        this.setText = this.setText.bind(this);
        this.addNote = this.addNote.bind(this);
        this.removeNote = this.removeNote.bind(this);
        this.editNote = this.editNote.bind(this);
        this.setNewTitle = this.setNewTitle.bind(this);
        this.setNewText = this.setNewText.bind(this);
    }

    showEditor() {
        this.setState({editorShowed: true})
        this.setState({editorTitle: "Добавить заметку"})
    }

    closeEditor() {
        this.setState(
            {
                editorShowed: false,
                editableTitle: "",
                editableText: "",
                title: "",
                text: ""
            }
        )
    }

    setTitle(e) {
        this.setState({lastTitle: e.target.value, editableTitle: e.target.value});
    }

    setText(e) {
        this.setState({lastText: e.target.value,  editableText: e.target.value});
    }

    setNewTitle(e) {
        const { data, editable } = this.state;
        const elem = data[editable];
        this.setState({editableTitle: e.target.value});
        elem.title = e.target.value;
    }

    setNewText(e) {
        const { data, editable } = this.state;
        const elem = data[editable];
        this.setState({editableText: e.target.value});
        elem.text = e.target.value;
    }

    addNote() {
        this.setState({editableTitle: "", editableText: ""});
        const { data } = this.state;

        const hours = `${new Date().getHours()}`.length > 1 ? new Date().getHours() : "0" + new Date().getHours();
        const minutes = `${new Date().getMinutes()}`.length > 1 ? new Date().getMinutes() : "0" + new Date().getMinutes();

        const days = `${new Date().getDate()}`.length > 1 ? new Date().getDate() : "0" + new Date().getDate();
        const months = `${new Date().getMonth()}`.length > 1 ? new Date().getMonth() : `0${new Date().getMonth()+1}`;

        const time = `${hours}:${minutes}`;
        const date = `${days}.${months}`;

        data.push({title: this.state.lastTitle, text: this.state.lastText, date, time, id: this.id});

        this.id++;

        this.setState(data);
        this.setState({editorTitle: 'Добавить заметку'});
        this.setState({editorShowed: false})
    }

    removeNote(id) {
        this.id--;
        this.setState(({data})=>{
            const index = data.findIndex(elem => elem.id === id);

            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }

    editNote(e) {
        this.setState({editorShowed: true});
        this.setState({editorTitle: 'Редактировать заметку'});
        this.setState({editable: e.target.parentNode.parentNode.getAttribute('data-id')});
    }

    render() {
        const { data, editorTitle, editorShowed, editableText, editableTitle } = this.state;

        let action;
        let setText;
        let setTitle;
        if(editorTitle === "Редактировать заметку") {
            action = this.closeEditor;
            setTitle = this.setNewTitle;
            setText = this.setNewText;
        } else {
            action = this.addNote;
            setTitle = this.setTitle;
            setText = this.setText;
        }

        return (
            <div className="container">
                <Header showEditor={this.showEditor}/>
                <NotesBlock 
                    editNote={this.editNote}
                    removeNote={this.removeNote}
                    notes={data}
                />
                <NoteEditor 
                    editorTitle={editorTitle}
                    show={editorShowed}
                    action={action}
                    setText={setText}
                    setTitle={setTitle}
                    editableTitle={editableTitle}
                    editableText={editableText}
                />
            </div>
        )
    }
}
