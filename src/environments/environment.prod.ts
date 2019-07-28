export const environment = {
  production: true,
  api: {
    listAllHeroes: 'http://localhost:1234/heroSpin/heroes/list/offset/',
    listAllSuperheroMovies: 'http://localhost:1234/heroSpin/movies/list/page/',
    poster: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2',
    keyParams: '?api_key=eca5e0be68fdba88825606937300d847&language=en-US&page=1',
    getMovieDetails: 'http://localhost:1234/heroSpin/movies/movieID/',
    getRandomMovieForHero: 'http://localhost:1234/heroSpin/movies/findRelevantRandomMovie/',
    getRandomMovie: 'http://localhost:1234/heroSpin/movies/findRandomMovie/'
  }
};