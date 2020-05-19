import React, { useState, useRef, useCallback } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import FetchAllMovies from './fetch';
import PutFilm from './putFilm';

export default function ListFilm() {
	const [ pageNumber, setPageNumber ] = useState(1);
	const langue = localStorage.getItem('langue') === null ? 'fr' : localStorage.getItem('langue');
	const query = 'https://api.themoviedb.org/3/search/movie?api_key=b936c3df071b03229069cfcbe5276410&language=' + langue  + '&&include_adult=false&sort_by=popularity.desc&query='+ localStorage.getItem('search') + '&page=';
	
	const {
		film,
		hasMore,
		loading,
		error,
	} = FetchAllMovies(query, pageNumber, setPageNumber);

	const observer = useRef();
	const lastFilmElementRef = useCallback(node => {
		if (loading) return;
		if (observer.current) observer.current.disconnect();
		observer.current = new IntersectionObserver(entries => {
			if (entries[0].isIntersecting && hasMore) {
				setPageNumber(prevPageNumber => prevPageNumber + 1);
			}
		})
		if (node) observer.current.observe(node)
	}, [loading, hasMore])
	return (
		<div>
			<React.Fragment>
				<Container fixed>
					<Typography component="div" className="list-film" >
						{ PutFilm(film, lastFilmElementRef) }
						<div className="loading">{loading && 'Loading...'}</div>
						<div className="loading">{film[0] === undefined ? 'FAITE UNE RECHERCHE POUR TROUVER UN FILM !' : ''}</div>
						<div>{error && 'Error'}</div>
					</Typography>
				</Container>
			</React.Fragment>
		</div>
	)
}
