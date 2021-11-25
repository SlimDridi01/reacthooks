import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactStars from "react-rating-stars-component";

function AddSerie({ Series, setSeries }) {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const ratingChanged = (newRating) => {
		setRating(newRating);
	};

	const [title, setTitle] = useState("");
	const [description, setDes] = useState("");
	const [url, setUrl] = useState("");
	const [rating, setRating] = useState(0);

	const addSerie = (e) =>
		setSeries([
			...Series,
			{ id: Series.length + 1, title, description, url, rating },
		]);

	return (
		<>
			<Button className="btn" variant="primary" onClick={handleShow}>
				Add A Serie
			</Button>

			<Modal
				className="Modal"
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title>Add Serie</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form className="form">
						<div className="title">
							<label htmlFor="title">Title : </label>
							<input
								type="text"
								onChange={(e) => setTitle(e.target.value)}
								value={title}
							/>
						</div>
						<div className="desc">
							<label htmlFor="Description">Description : </label>
							<input
								onChange={(e) => setDes(e.target.value)}
								value={description}
								type="text"
							/>
						</div>
						<div className="imgsrc">
							<label htmlFor="ImageSrc">ImageSrc : </label>
							<input
								onChange={(e) => setUrl(e.target.value)}
								value={url}
								type="text"
							/>
						</div>
						<img
							src={url}
							alt=""
							style={{
								maxWidth: "499px",
								maxHeight: "750px",
								marginTop: "15px",
							}}
						/>

						<label htmlFor="Rating">Rating : </label>
						<ReactStars
							count={5}
							onChange={ratingChanged}
							size={35}
							value={rating}
							activeColor="#ffd700"
						/>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="Dark" onClick={handleClose}>
						Close
					</Button>
					<Button variant="Success" onClick={addSerie}>
						Add
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default AddSerie;
