import React from "react";

const Search = props => {
	return (
		<div className="filter">
			<input
				id="search-bar"
				type="text"
				placeholder="Search Notes by Title"
				onChange={props.updateSearch}
			/>
		</div>
	);
};

export default Search;
