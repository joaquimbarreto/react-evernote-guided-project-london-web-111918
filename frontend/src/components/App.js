import React, { Component } from "react";
import Header from "./Header";
import NoteContainer from "./NoteContainer";

const notesAPI = "http://localhost:3000/api/v1/notes";

class App extends Component {
	state = {
		notes: []
	};

	fetchNotesAPI = async () => await fetch(notesAPI).then(res => res.json());

	componentDidMount = async () => {
		this.setState({ notes: await this.fetchNotesAPI() });
	};

	updateNotes = (id, editedNote) => {
		const newNotes = this.state.notes.map(note => {
			return note.id === id ? (note = editedNote) : note;
		});
		this.setState({ notes: newNotes });
	};

	addNewNote = newNote => {
		this.setState({ notes: this.state.notes, newNote });
	};

	render() {
		return (
			<div className="app">
				<Header />
				<NoteContainer
					notes={this.state.notes}
					updateNotes={this.updateNotes}
					addNewNote={this.addNewNote}
				/>
			</div>
		);
	}
}

export default App;
