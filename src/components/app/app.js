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

        this.getResource = async (url) => {
            let res = await fetch(url);
        
            if (!res.ok) {
                throw new Error(`Could not fetch ${url}, status: ${res.status}`);
            }
        
            return await res.json();
        }

        this.getResource('http://localhost:3000/data')
        .then(data => {
            this.setState({data})
        });

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
        const { editableTitle, editable } = this.state;
        this.setState({editableTitle: e.target.value});
        // elem.title = e.target.value;

        this.getResource(`http://localhost:3000/data/${editable}`)
        .then(data => {
            const hours = `${new Date().getHours()}`.length > 1 ? new Date().getHours() : "0" + new Date().getHours();
            const minutes = `${new Date().getMinutes()}`.length > 1 ? new Date().getMinutes() : "0" + new Date().getMinutes();

            const days = `${new Date().getDate()}`.length > 1 ? new Date().getDate() : "0" + new Date().getDate();
            const months = `${new Date().getMonth()}`.length > 1 ? new Date().getMonth() : `0${new Date().getMonth()+1}`;

            const time = `${hours}:${minutes}`;
            const date = `${days}.${months}`;

            fetch(`http://localhost:3000/data/${editable}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: editableTitle,
                    text: data.text,
                    date: date,
                    time: time
                })
            })
            data.title = e.target.value;
        });
    }

    setNewText(e) {
        // const { data, editable } = this.state;
        // const elem = data[editable];
        // this.setState({editableText: e.target.value});
        // elem.text = e.target.value;

    }

    addNote() {

        const hours = `${new Date().getHours()}`.length > 1 ? new Date().getHours() : "0" + new Date().getHours();
        const minutes = `${new Date().getMinutes()}`.length > 1 ? new Date().getMinutes() : "0" + new Date().getMinutes();

        const days = `${new Date().getDate()}`.length > 1 ? new Date().getDate() : "0" + new Date().getDate();
        const months = `${new Date().getMonth()}`.length > 1 ? new Date().getMonth() : `0${new Date().getMonth()+1}`;

        const time = `${hours}:${minutes}`;
        const date = `${days}.${months}`;

        const postData = (url, data) => {
            fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        };

        postData("http://localhost:3000/data", {
            title: this.state.lastTitle, 
            text: this.state.lastText, 
            date, 
            time, 
            id: this.id
        });

        this.getResource('http://localhost:3000/data')
        .then(data => {
            this.setState({data})
        });

        this.id++;
        
        this.setState({
            editorTitle: 'Добавить заметку',
            editorShowed: false
        });
    }

    removeNote(id) {
        this.id = this.id > 0 ? this.id-- : 0;
        const { data } = this.state;
        
        const index = data.findIndex(elem => elem.id === id);

        const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

        fetch(`http://localhost:3000/data/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        this.setState({data: newArr});

    }

    editNote(e) {
        this.setState({editorShowed: true});
        this.setState({editorTitle: 'Редактировать заметку'});

        this.setState({editable: e.target.parentNode.parentNode.getAttribute('data-id')});
    }

    render() {
        const { editorTitle, editorShowed, editableText, editableTitle } = this.state;

        let action,
            setText,
            setTitle;
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
                    notes={this.state.data}
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
