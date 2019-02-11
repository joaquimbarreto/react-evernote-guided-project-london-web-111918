import React, { Component, Fragment } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

class NoteContainer extends Component {
	state = {
		showNote: null,
		editNote: null
	};

	handleSideClick = note => {
		this.setState({ showNote: note });
	};

	handleEditClick = note => {
		this.setState({ editNote: note });
	};

	handleCancelClick = note => {
		this.setState({
			showNote: note,
			editNote: null
		});
	};

	render() {
		const { notes, updateNotes } = this.props;
		const { showNote, editNote } = this.state;
		return (
			<Fragment>
				<Search />
				<div className="container">
					<Sidebar notes={notes} handleSideClick={this.handleSideClick} />
					<Content
						showNote={showNote}
						editNote={editNote}
						handleEditClick={this.handleEditClick}
						handleCancelClick={this.handleCancelClick}
						updateNotes={updateNotes}
					/>
				</div>
			</Fragment>
		);
	}
}

export default NoteContainer;
