const requests = {
    /* ============ MOVIES =============== */

    fetchMovieAction: `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=28`,
    fetchMovieAdventure: `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=12`,
    fetchMovieAnimation: `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=16`,
    fetchMovieComedy: `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=35`,
    fetchMovieCrime: `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=80`,
    fetchMovieDocumentary: `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=99`,
    fetchMovieDrama: `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=18`,
    fetchMovieSciFi: `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=878`,
    fetchMovieThriller: `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=53`,
    fetchMovieRomance: `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=10749`,
    fetchMovieWar: `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=10752`,
    fetchMovieHorror: `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=27`, 
    fetchMystery: `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=9648`,
    fetchMoviePopular: `movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,

    /* ========== TV SHOWS ========== */
    fetchPopularTV: `tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
    fetchTopRatedTV: `tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
    fetchActionAdventureTV: `discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=10759`,
    fetchAnimatedTV: `discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=16`,
    fetchComedyTV: `discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=35`,
    fetchCrimeTV: `discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=80`,
    fetchDocumentaryTV: `discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=99`,
    fetchDramaTV: `discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=18`,
    fetchMysteryTV: `discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=9648`,
    fetchSciFiTV: `discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=10765`,
}

export default requests;