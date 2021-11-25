import React from "react";
import { useState } from "react";
import Card from "./Card";
import Add from "./Add";
import Filter from "./Filter";

function List() {
	const [Series, setSeries] = useState([
		{
			id: 1,
			title: "Arcane",
			description:
				"Based on the world behind League of Legends, Arcane dives into the delicate balance between the rich, utopian city of Piltover Crest icon.png Piltover and the seedy, oppressed underground of Zaun Crest icon.png Zaun. Known across Runeterra as the (city of progress) many of the most brilliant minds call these cities home. But the creation of hextech, a way for any person to control magical energy, threatens that balance. The story follows the origins of two iconic League champions-and the power that will tear them apart. Like the game on which it is based, Arcane is aimed at a (+16) audience and will deal with some more adult subject matter.",
			url: "https://m.media-amazon.com/images/M/MV5BYmU5OWM5ZTAtNjUzOC00NmUyLTgyOWMtMjlkNjdlMDAzMzU1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
			rating: 5,
		},
		{
			id: 2,
			title: "Gomorrah",
			description:
				"Set in the suburbs of Naples Italy the crime drama goes inside the Camorra a fierce Neapolitan crime organization led by Pietro Savastano The story is told through the eyes of Don Pietros right-hand man, Ciro Di Marzio, whose faith in the family is tested when he realizes how far Don Pietro is willing to go to keep his power. Despite his feelings, Ciro feels an obligation to obey Don Pietros orders when he tasks his underling with protecting his son Genny, who is being groomed to take Don Pietros place while the elder Savastano is serving a lengthy prison sentence.",
			url: "https://resizing.flixster.com/eym3A7mXKtfjWhcT2NEBHg5lWPw=/ems.ZW1zLXByZC1hc3NldHMvdHZzZWFzb24vUlRUVjkyMjk2Ni53ZWJw",
			rating: 5,
		},
		{
			id: 3,
			title: "Suburra",
			description:
				"Suburra: Blood on Rome Suburra draws from the real life events of the Mafia Capitale investigation and focuses on power clashes and corruption among organized crime, politicians and churchmen.[3][4] The series revolves around Aureliano Adami (Alessandro Borghi), an Ostia-based gang member, and his relations with Alberto (Spadino) Anacleti (Giacomo Ferrara), a Sinti gang member, and Gabriele (Lele) Marchilli (Eduardo Valdarnini), the only son of a policeman who becomes involved in crime. Samurai (Francesco Acquaroli), an antagonist to the Adamis, is the head of Roman organized crime and contact for the Sicilian Mafia in Rome; he approaches politician Amedeo Cinaglia (Filippo Nigro) to aid in his Ostia affairs. Sara Monaschi (Claudia Gerini) is a Vatican financial auditor for lands in Ostia.",
			url: "  https://m.media-amazon.com/images/M/MV5BM2MwN2Y4ZWEtNTk2Mi00MzcwLTk1YWMtMmQzNGRlYjBkMDFmXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg ",
			rating: 5,
		},
		{
			id: 4,
			title: "The Immortal",
			description:
				"The Immortal (Italian: L'immortale) is a 2019 Italian crime film directed by Marco D'Amore. The film is both a prequel and a sequel to the events after the third season of the TV series Gomorrah.",
			url: "https://m.media-amazon.com/images/M/MV5BZjFiNzA5ODgtMTdjMy00MjM1LThkMTYtMWM1MzM0MzJlMzdlXkEyXkFqcGdeQXVyOTEwNTkyNjE@._V1_.jpg",
			rating: 4,
		},
		{
			id: 5,
			title: "Lucifer",
			description:
				"Based on characters created by Neil Gaiman, Sam Kieth and Mike Dringenberg, this series follows Lucifer, the original fallen angel, who has become dissatisfied with his life in hell. After abandoning his throne and retiring to Los Angeles, Lucifer indulges in his favorite things (women, wine and song) -- until a murder takes place outside of his upscale nightclub. For the first time in billions of years, the murder awakens something unfamiliar in Lucifer's soul that is eerily similar to compassion and sympathy. Lucifer is faced with another surprise when he meets an intriguing homicide detective named Chloe, who appears to possess an inherent goodness -- unlike the worst of humanity, to which he is accustomed. Suddenly, Lucifer starts to wonder if there is hope for his soul.",
			url: "https://m.media-amazon.com/images/M/MV5BNDJjMzc4NGYtZmFmNS00YWY3LThjMzQtYzJlNGFkZGRiOWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
			rating: 3,
		},
		{
			id: 6,
			title: "The 100",
			description:
				"A nuclear conflict has decimated civilisation. A century later, a spaceship accommodating humanity's lone survivors dispatch 100 juvenile delinquents back to the Earth to determine its habitability.",
			url: "https://i.pinimg.com/originals/13/ce/63/13ce63119e9e7966586e1612b2ccecd6.jpg",
			rating: 3,
		},
		{
			id: 7,
			title: "Paranormal",
			description:
				"Haematologist Refaat Ismail, a strong scientific mind, encounters a series of unexplainable paranormal events. Soon, he starts questioning his life and loses sense of what he believes in.",
			url: "https://m.media-amazon.com/images/M/MV5BNGY1Y2RlZmItZTQ1Zi00MzUyLThiYzEtZjA2OTIzMTM1YTkwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
			rating: 4,
		},
		{
			id: 8,
			title: "Freud",
			description:
				"While investigating several disappearances and murders in Vienna, young Sigmund Freud and a psychic medium become entangled in an occult conspiracy.",
			url: "https://m.media-amazon.com/images/M/MV5BOTZjMjdkZTYtNmRhOS00ZjMzLTlmNDktNWQzNDY0YWI4ZjU5XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
			rating: 3,
		},
	]);
	const [Input, setInput] = useState("");
	const [rate, setRate] = useState(1);
	const ratingChanged = (newRating) => {
		setRate(newRating);
	};
	return (
		<div>
			<Filter ratingChanged={ratingChanged} setInput={setInput} />
			<Card
				rate={rate}
				Input={Input}
				ratingChanged={ratingChanged}
				Series={Series}
			/>
			<Add Series={Series} setSeries={setSeries} />
		</div>
	);
}

export default List;
