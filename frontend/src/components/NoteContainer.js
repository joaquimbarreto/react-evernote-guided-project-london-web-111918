import React, { Component, Fragment } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

class NoteContainer extends Component {
	state = {
		showNote: null,
		editNote: null,
		newNote: false,
		searchTerm: ""
	};

	handleEditClick = note => {
		this.setState({ editNote: note });
	};

	handleSideClick = note => {
		this.setState({ showNote: note, editNote: null });
	};

	handleCancelClick = note => {
		this.setState({
			showNote: note,
			editNote: null
		});
	};
	handleNewNoteClick = () => {
		this.setState({
			showNote: null,
			editNote: null,
			newNote: true
		});
	};

	updateSearch = event => {
		this.setState({
			searchTerm: event.target.value
		});
	};

	render() {
		const { notes, updateNotes, addNewNote } = this.props;
		const { showNote, editNote, searchTerm, newNote } = this.state;
		return (
			<Fragment>
				<Search updateSearch={this.updateSearch} />
				<div className="container">
					<Sidebar
						notes={notes}
						searchTerm={searchTerm}
						handleSideClick={this.handleSideClick}
						handleNewNoteClick={this.handleNewNoteClick}
					/>
					<Content
						editNote={editNote}
						showNote={showNote}
						newNote={newNote}
						handleCancelClick={this.handleCancelClick}
						updateNotes={updateNotes}
						addNewNote={addNewNote}
						handleEditClick={this.handleEditClick}
					/>
				</div>
			</Fragment>
		);
	}
}

export default NoteContainer;
