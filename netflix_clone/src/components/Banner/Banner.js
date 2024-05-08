import React, { useEffect } from "react";
import { useState } from "react";
import requests from "../../Utils/requests";
import axios from "../../Utils/axios";
import "./banner.css";
const Banner = () => {
	const [movie, setMovie] = useState({});
	const API_KEY = process.env.REACT_APP_API_KEY;
	useEffect(() => {
		(async () => {
			try {
				const request = await axios.get(
					`https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`
				); //concatenate baseurl+ requests
				console.log(request);
				setMovie(
					request.data.results[
						Math.floor(Math.random() * request.data.results.length)
					]
				);
			} catch (error) {
				console.log("error", error);
			}
		})();
	}, []);
	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	}
	return (
		<div
			className="banner"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className="banner__contents">
				<h1
					className="banner__
				title"
				>
					{movie?.title || movie?.name || movie?.original_name}
				</h1>
				<div className="banner__buttons">
					<button className="banner__button play">play</button>
					<button className="banner__button">My List</button>
				</div>
				<h1 className="banner__description">
					{truncate(movie?.overview, 150)}
				</h1>
			</div>
			<div className="banner__fadeBottom" />
		</div>
	);
};

export default Banner;
