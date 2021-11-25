import React from "react";
import ReactStars from "react-rating-stars-component";

function Card({ Series }) {
	const ratingChanged = (newRating) => {
		console.log(newRating);
	};

	return (
		<div>
			<div className="container">
				{Series.map((Serie) => (
					<div className="CRD">
						<div className="Card">
							<img src={Serie.url} alt="Pic of the Serie" />
							<div className="info">
								<h2>
									{" "}
									{Serie.id} {" : "}
									{Serie.title}{" "}
								</h2>
								<p> {Serie.description}</p>
							</div>
						</div>
						<div className="rtn">
							<h3>Rating </h3>
							<ReactStars
								count={5}
								onChange={ratingChanged}
								size={24}
								activeColor="#ffd700"
								value={Serie.rating}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Card;
