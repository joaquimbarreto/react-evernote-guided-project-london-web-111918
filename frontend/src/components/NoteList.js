import React from "react";
import NoteItem from "./NoteItem";

const NoteList = props => {
	const filterNotes = () => {
		return props.notes.filter(note =>
			note.title.toLowerCase().includes(props.searchTerm.toLowerCase())
		);
	};

	const filteredNotes = filterNotes();
	return (
		<ul>
			{filteredNotes.map(note => (
				<NoteItem
					key={note.id}
					note={note}
					handleSideClick={props.handleSideClick}
				/>
			))}
		</ul>
	);
};

export default NoteList;
