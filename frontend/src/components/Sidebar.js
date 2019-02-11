import React, { Component } from "react";
import NoteList from "./NoteList";

class Sidebar extends Component {
	render() {
		return (
			<div className="master-detail-element sidebar">
				<NoteList
					notes={this.props.notes}
					handleSideClick={this.props.handleSideClick}
				/>
				<button>New</button>
			</div>
		);
	}
}

export default Sidebar;
