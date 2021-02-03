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
        this.data = [];

        async function getResource(url) {
            let res = await fetch(url);
        
            if (!res.ok) {
                throw new Error(`Could not fetch ${url}, status: ${res.status}`);
            }
        
            return await res.json();
        }

        this.postData = async (url, data) => {
            let res = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: data
            });
        
            return await res.json();
        };

        getResource('http://localhost:3000/data')
        .then(data => {
            data.forEach(({title, text, data, time, id}) => {
                this.data.push({title, text, data, time, id});
            });
        });

        this.state = {
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
        this.setState(
            {
                editableTitle: "",
                editableText: "",
                title: "",
                text: ""
            }
        )
    }

    closeEditor() {
        this.setState(
            {
                editorShowed: false
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
        const { data } = this.state;

        const hours = `${new Date().getHours()}`.length > 1 ? new Date().getHours() : "0" + new Date().getHours();
        const minutes = `${new Date().getMinutes()}`.length > 1 ? new Date().getMinutes() : "0" + new Date().getMinutes();

        const days = `${new Date().getDate()}`.length > 1 ? new Date().getDate() : "0" + new Date().getDate();
        const months = `${new Date().getMonth()}`.length > 1 ? new Date().getMonth() : `0${new Date().getMonth()+1}`;

        const time = `${hours}:${minutes}`;
        const date = `${days}.${months}`;

        data.push({title: this.state.lastTitle, text: this.state.lastText, date, time, id: this.id});

        this.postData('http://localhost:3000/data', {
            title: this.state.lastTitle, 
            text: this.state.lastText, 
            date, 
            time, 
            id: this.id
        })

        this.id++;
        
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
        const { editorTitle, editorShowed, editableText, editableTitle } = this.state;

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
                    notes={this.data}
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
