export const environment = {
  production: true,
  api: {
    listAllHeroes: 'http://localhost:1234/heroSpin/heroes/list/offset/',
    listAllSuperheroMovies: 'http://localhost:1234/heroSpin/movies/list/page/',
    poster: 'http://localhost:1234/heroSpin/movies/poster',
    getMovieDetails: 'http://localhost:1234/heroSpin/movies/movieID/',
    getRandomMovieForHero: 'http://localhost:1234/heroSpin/movies/findRelevantRandomMovie/',
    getRandomMovie: 'http://localhost:1234/heroSpin/movies/findRandomMovie/'
  }
};