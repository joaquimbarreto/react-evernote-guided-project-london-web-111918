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
			return note.id === id ? (note = { ...editedNote }) : note;
		});
		console.log(newNotes);
		this.setState({ notes: newNotes });
	};

	render() {
		return (
			<div className="app">
				<Header />
				<NoteContainer
					notes={this.state.notes}
					updateNotes={this.updateNotes}
				/>
			</div>
		);
	}
}

export default App;
