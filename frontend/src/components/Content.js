import React, { Component } from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";
import NoteNew from "./NoteNew";

class Content extends Component {
	renderContent = () => {
		const {
			showNote,
			editNote,
			newNote,
			handleCancelClick,
			updateNotes,
			addNewNote,
			handleEditClick
		} = this.props;
		if (editNote) {
			return (
				<NoteEditor
					note={editNote}
					handleCancelClick={handleCancelClick}
					updateNotes={updateNotes}
				/>
			);
		} else if (showNote) {
			return <NoteViewer note={showNote} handleEditClick={handleEditClick} />;
		} else if (newNote) {
			return (
				<NoteNew
					handleEditClick={handleEditClick}
					updateNotes={updateNotes}
					addNewNote={addNewNote}
				/>
			);
		} else {
			return <Instructions />;
		}
	};

	render() {
		return (
			<div className="master-detail-element detail">{this.renderContent()}</div>
		);
	}
}

export default Content;
