import React from "react";
import Row from "../Row/Row";
import requests from "../../../Utils/requests";
const Rowlist = () => {
	return (
		<>
			<Row
				title="NETFLIX ORIGINALS"
				fetchUrl={`https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`}
				isLargeRow={false}
			/>
			<Row
				title="TRENDING NEW"
				fetchUrl={`https://api.themoviedb.org/3${requests.fetchTrending}`}
				isLargeRow={false}
			/>
			<Row
				title="TOP RATED MOVIES"
				fetchUrl={`https://api.themoviedb.org/3${requests.fetchTopRatedMovies}`}
				isLargeRow={false}
			/>
			<Row
				title="ACTION MOVIES"
				fetchUrl={`https://api.themoviedb.org/3${requests.fetchActionMovies}`}
				isLargeRow={true}
			/>
			<Row
				title="COMEDY MOVIES"
				fetchUrl={`https://api.themoviedb.org/3${requests.fetchComedyMovies}`}
				isLargeRow={true}
			/>
			<Row
				title="HORROR MOVIES"
				fetchUrl={`https://api.themoviedb.org/3${requests.fetchHorrorMovies}`}
				isLargeRow={true}
			/>
			<Row
				title="ROMANCE MOVIES"
				fetchUrl={`https://api.themoviedb.org/3${requests.fetchRomanceMovies}`}
				isLargeRow={true}
			/>
			<Row
				title="DOCUMENTARIES"
				fetchUrl={`https://api.themoviedb.org/3${requests.fetchDocumentaries}`}
				isLargeRow={true}
			/>
			<Row
				title="TV SHOW"
				fetchUrl={`https://api.themoviedb.org/3${requests.fetchTvshow}`}
				isLargeRow={true}
			/>
		</>
	);
};

export default Rowlist;
{
	/* <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" /> */
}
{
	/* <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */
}
