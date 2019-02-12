import React, { Component } from "react";

const notesAPI = "http://localhost:3000/api/v1/notes/";

class NoteNew extends Component {
	state = {
		newNote: null
	};

	handleChange = event => {
		this.setState({
			newNote: {
				...this.state.newNote,
				[event.target.name]: event.target.value
			}
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		this.updateNote();
	};

	updateNote = () => {
		fetch(notesAPI, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(this.state.newNote)
		})
			.then(res => res.json())
			.then(() => this.props.addNewNote(this.state.newNote));
	};

	render() {
		const { handleCancelClick } = this.props;
		return (
			<form className="note-editor" onSubmit={this.handleSubmit}>
				<input
					type="text"
					name="title"
					placeholder="Title"
					onChange={this.handleChange}
				/>
				<textarea
					name="body"
					placeholder="Enter note ..."
					onChange={this.handleChange}
				/>
				<div className="button-row">
					<input className="button" type="submit" value="Save" />
					<button type="button" onClick={() => handleCancelClick()}>
						Cancel
					</button>
				</div>
			</form>
		);
	}
}

export default NoteNew;
