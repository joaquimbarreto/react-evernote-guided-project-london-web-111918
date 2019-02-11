import React from "react";

const NoteList = props => {
	const { note } = props;
	return (
		<li onClick={() => props.handleSideClick(note)}>
			<h2>{note.title}</h2>
			<p>{note.body.substring(0, 45)}...</p>
		</li>
	);
};

export default NoteList;
