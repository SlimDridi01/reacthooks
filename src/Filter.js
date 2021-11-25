import React from "react";
import ReactStars from "react-rating-stars-component";
function Filter({ setInput, ratingChanged }) {
	return (
		<div className="nav-bar">
			<header>
				<h1>123-Serie </h1>
				<div className="input-info">
					<p>Search </p>
					<input type="text" onChange={(e) => setInput(e.target.value)} />
					<ReactStars
						count={5}
						onChange={ratingChanged}
						size={24}
						activeColor="#ffd700"
					/>
				</div>
			</header>
			<hr />
		</div>
	);
}

export default Filter;
