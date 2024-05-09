import React, { useEffect, useState } from "react";
import "./row.css";
import axios from "../../../Utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
const Row = ({ title, fetchUrl, isLargeRow }) => {
	const [movies, setMovie] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState("");
	const base_url = "https://image.tmdb.org/t/p/original";
	console.log(base_url);
	useEffect(() => {
		(async () => {
			try {
				console.log(fetchUrl);
				const request = await axios.get(fetchUrl);
				console.log(request);
				setMovie(request.data.results);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);
	const handleClick = (movie) => {
		if (trailerUrl) {
			setTrailerUrl("");
		} else {
			movieTrailer(movie?.name || movie?.title || movie?.original_name).then(
				(url) => {
					const urlParams = new URLSearchParams(new URL(url).search);
					setTrailerUrl(urlParams.get("v"));
				}
			);
		}
	};
	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			autoplay: 0,
		},
	};
	return (
		<div className="row">
			<h2>{title}</h2>
			<div className="row__posters">
				{movies?.map((movie, index) => (
					<img
						onClick={() => {
							handleClick(movie);
						}}
						key={index}
						src={`${base_url}${
							isLargeRow ? movie.poster_path : movie.backdrop_path
						}`}
						alt={movie.name}
						className={`row__poster ${isLargeRow && "row__posterLarge"}`}
					/>
				))}
			</div>
			<div style={{ padding: "40px" }}>
				{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
			</div>
		</div>
	);
};

export default Row;
