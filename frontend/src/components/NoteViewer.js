import React, { Fragment } from "react";

const NoteViewer = props => {
	const { note } = props;
	return (
		<Fragment>
			<h2>{note.title}</h2>
			<p>{note.body}</p>
			<button onClick={() => props.handleEditClick(note)}>Edit</button>
		</Fragment>
	);
};

export default NoteViewer;
