import React, { Component } from "react";
import NoteList from "./NoteList";

class Sidebar extends Component {
	render() {
		const {
			notes,
			handleSideClick,
			searchTerm,
			handleNewNoteClick
		} = this.props;
		return (
			<div className="master-detail-element sidebar">
				<NoteList
					notes={notes}
					handleSideClick={handleSideClick}
					searchTerm={searchTerm}
				/>
				<button onClick={() => handleNewNoteClick()}>New</button>
			</div>
		);
	}
}

export default Sidebar;
