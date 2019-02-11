import React, { Component } from "react";

const notesAPI = "http://localhost:3000/api/v1/notes";

class NoteEditor extends Component {
	state = {
		editedNote: null
	};

	handleChange = event => {
		this.setState({
			editedNote: {
				[event.target.name]: event.target.value
			}
		});
	};

	handleSubmit = event => {
		console.log(this.state.editedNote);
		event.preventDefault();
		this.updateNote();
	};

	updateNote = () => {
		fetch(notesAPI + this.state.editedNote.id, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(this.state.editedNote)
		})
			.then(res => res.json())
			.then(() =>
				this.props.updateNotes(this.props.note.id, this.state.editedNote)
			);
	};

	render() {
		const { note, handleCancelClick } = this.props;
		return (
			<form className="note-editor" onSubmit={() => this.handleSubmit}>
				<input
					type="text"
					name="title"
					defaultValue={note.title}
					onChange={this.handleChange}
				/>
				<textarea
					name="body"
					defaultValue={note.body}
					onChange={this.handleChange}
				/>
				<div className="button-row">
					<input className="button" type="submit" value="Save" />
					<button type="button" onClick={() => handleCancelClick(note)}>
						Cancel
					</button>
				</div>
			</form>
		);
	}
}

export default NoteEditor;
